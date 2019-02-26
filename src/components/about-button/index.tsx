import React, { Component } from 'react';
// import PropTypes, { any } from 'prop-types';
import Button from '@material-ui/core/Button';
import './index.scss';

export class AboutButton extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {

        return (
            <div>

                <Button variant="contained" color="primary" className='button'>
                    About the project
      </Button>
            </div >
        );
    }
}



