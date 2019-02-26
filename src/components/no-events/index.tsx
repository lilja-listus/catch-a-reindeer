import React, { Component } from 'react';
import './index.scss';

export class NoEvents extends Component<any, any>{
    public render() {
        return (
            <div className='nothing-to-show'>
                There are no events in our database in this region
            </div>
        );
    }
}