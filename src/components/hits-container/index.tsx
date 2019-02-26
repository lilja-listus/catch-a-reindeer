import React, { Component } from 'react';
import './index.scss';
import { NoEvents } from '../no-events/index';

let showComponent;

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);
    }
    public showResults(queryResults, items) {
        if (queryResults) {
            showComponent = <div>{React.Children.toArray(items)}</div>
        }
        if (queryResults.length === 0) {
            showComponent = <NoEvents />
        }
    }
    public render() {
        const { events, hide } = this.props;
        const items = (events || []).map(event => (<div className="hits"><a href={event.links[0]}>{event.name} </a>, {event.dates}, {event.location}</div>));

        return (
            <div className="hits-container">
                {this.showResults(events, items)}
                <div hidden={hide}>{showComponent}</div>
                <div hidden={hide}><img src='algolia-logo.svg'></img></div>
            </div>
        );
    }
} 