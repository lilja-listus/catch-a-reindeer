import React, { Component } from 'react';
import './index.scss';

export class Greeting extends Component<any, any>{
    public render() {
        const { hide } = this.props;
        return (
            <div className='greeting'>
                <div className='welcome-text' hidden={!hide}>
                    Welcome to the place where you can find info about different events in the Finno-Ugric world
                </div>
            </div>
        );
    }
}