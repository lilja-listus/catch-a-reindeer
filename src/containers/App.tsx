import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Routes from '../routes';

export class App extends Component<any, any>{

    // constructor(props) {
    //     super(props)
    // }

    // this.state = {
    // redirect: null


    public render() {
        // if (this.state.redirect !== null && this.state.redirect) {
        //     return <Redirect to="/" />;
        // } else if (!this.state.user) {
        //     return null; // loading state
        // }
        return (<div><Routes />
        </div>
        );
    }
}
