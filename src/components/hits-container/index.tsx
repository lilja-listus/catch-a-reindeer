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

        // let theseEvents = events.map(function (event) {
        //     return <p>{event}</p>;

        // });
        event = events[0];

        console.log(event);
        return (<div>blah</div>);
    }
} 