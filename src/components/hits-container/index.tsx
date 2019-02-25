import React, { Component } from 'react';
import './index.scss';
import { IEvent } from '../../common/interfaces/events';

let events: IEvent[];

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);
    }

    events = [];



    public render() {

        let { events } = this.props;

        event = events[0];

        console.log(event);

        const items = (events || []).map(event => (<li>{event.name}</li>))
        return (<ul>{React.Children.toArray(items)}</ul>);
    }
} 