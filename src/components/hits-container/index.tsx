import React, { Component } from 'react';
import './index.scss';

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);
    }

    public render() {
        const { events } = this.props;

        let theseEvents = events.map(function (event) {
            return <li>{event}</li>;

        });


        return (<ul>{theseEvents}</ul>);
    }
}