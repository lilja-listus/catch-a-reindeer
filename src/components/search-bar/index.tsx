import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Component } from 'react';
import './index.scss';
import algoliasearch from 'algoliasearch';
import { HitsContainer } from '../../components/hits-container';



export class SearchBar extends Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            event: null,
            query: ''
        }
    }


    public searchClick(query) {
        console.log(query);
        let events = [];
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
                let event = name +
                    " (" + dates + ") " +
                    " learn more at: " + listOfLinks +
                    "location: " + location;

                events.push(event);

            });
            this.setState({ events: events })
        });
    }

    public render() {

        const { events, query } = this.state;

        return (
            <div>
                <Paper className='root' elevation={1}>

                    <InputBase className='inputField' placeholder="Type in a name, city, country, year etc."
                        value={this.state.query}
                        onChange={event => { this.setState({ query: event.target.value }) }}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.searchClick(event.target.value);
                            }
                        }} />
                    <IconButton className='iconButton' aria-label="Search" onClick=
                        {() => this.searchClick(query)}

                    >
                        <SearchIcon />
                    </IconButton>

                </Paper>
                <HitsContainer events={events} />
            </div>

        );
    }
}




