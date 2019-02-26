import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Component } from 'react';
import './index.scss';
import { HitsContainer } from '../../components/hits-container';
import { searchClick } from '../../common/services/search';
import { IEvent } from '../../common/interfaces/events';
import { Greeting } from '../greeting';

let events: IEvent[];

interface ISearchBarState {
    event: any;
    query: string;
    events: IEvent[];
    hide: boolean;
}

export class SearchBar extends Component<any, ISearchBarState> {
    constructor(props) {
        super(props);

        this.state = {
            event: null,
            query: '',
            events: [],
            hide: true
        }
    }

    public async updateEvents(query) {

        try {
            events = await searchClick(query);
            this.setState({ events: events, hide: false });


        } catch (err) {
            console.log(err);
        }
    }

    public render() {
        const { query, events, hide } = this.state;
        return (
            <div>
                <Paper className='root' elevation={1}>
                    <InputBase className='inputField' placeholder="Type in a name, city, country, year etc."
                        value={this.state.query}
                        onChange={event => { this.setState({ query: event.target.value }) }}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.updateEvents(event.target.value);
                            }
                        }}
                    />
                    <IconButton className='iconButton' aria-label="Search"
                        onClick={() => this.updateEvents(query)}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Greeting hide={hide} />
                <HitsContainer events={events} hide={hide} />
            </div>
        );
    }
}