import React, { Component } from 'react';
import './index.scss';
import { IEvent } from '../../common/interfaces/events';

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);
    }

    public render() {

        let { events } = this.props;
        const items = (events || []).map(event => (<div className="hits"><a href={event.links[0]}>{event.name} </a>, {event.dates}, {event.location}</div>));

        // TODO: make switch to either show hits or Nothing

        // if (events.length===0) {
        //     items = <div>Unfortunately, there are no events here</div>
        // }
    

        return (
        <div className="hits-container">
          <div>{React.Children.toArray(items)}</div>
          <div><img src='algolia-logo.svg'></img></div>

        </div>
        
        );
    }
} 