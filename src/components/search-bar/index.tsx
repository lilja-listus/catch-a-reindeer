import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Component } from 'react';
import './index.scss';
import algoliasearch from 'algoliasearch';


export class SearchBar extends Component<any, any> {

    constructor(props) {
        super(props);
    }


    public searchClick(query) {
        console.log(query);
        let events = new Array();

        let client = algoliasearch('UFI1GERD33', '0f949363e44d09d51dd523165f9f36a0');
        let index = client.initIndex('conferences');

        index.search(query).then(result => {
            const hits = result.hits;
            hits.forEach((element) => {
                let name = element.name;
                let dates = element.start_date + ' - ' + element.end_date;
                let links = element.links;
                let listOfLinks = '';

                links.forEach((link) => {
                    if (link !== '') {
                        listOfLinks += '<a>' + link + '</a>' + ', ';
                    }
                });

                let location = element.location.country.eng + ", " + element.location.city.eng;
                let event = "<em>" + name + "</em>" +
                    " (" + dates + ") " + "</br>" +
                    " learn more at: " + listOfLinks + "</br>" +
                    "location: " + location + "</br>";

                events.push(event);
                events.push("</br>");
                events.push("<div><img src='algolia-logo.svg'></img></div>");
                events.join('');

            });

        });
        console.log(events);

    }

    public render() {

        const { query } = this.props;

        return (
            <Paper className='root' elevation={1}>

                <InputBase className='inputField' placeholder="Search" />
                <IconButton className='iconButton' aria-label="Search" onClick=
                    {() => this.searchClick(query)} >
                    <SearchIcon />
                </IconButton>

            </Paper>
        );
    }
}




