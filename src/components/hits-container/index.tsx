import React, { Component } from 'react';
import './index.scss';

export class HitsContainer extends Component<any, any>{
    constructor(props) {
        super(props);
    }

    public render() {

        const { events } = this.props;
        return (<div> {events.join('')} </div>);
    }
}