import React, { Component } from 'react';
import './index.scss';
import { NoEvents } from '../no-events/index';

let show;

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);

    }
    public showResults(queryResults, items) {


        console.log(queryResults);
        if (queryResults) {
            show = <div>{React.Children.toArray(items)}</div>

        }
        if (queryResults.length === 0) {
            show = <NoEvents />
        }

    }



    public render() {

        const { events, hide } = this.props;

        const items = (events || []).map(event => (<div className="hits"><a href={event.links[0]}>{event.name} </a>, {event.dates}, {event.location}</div>));


        return (
            <div className="hits-container">
                {this.showResults(events, items)}
                <div hidden={hide}>{show}</div>
                <div hidden={hide}><img src='algolia-logo.svg'></img></div>
            </div>
        );
    }
} 