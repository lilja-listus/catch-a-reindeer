import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './index.scss';
import { Link } from 'react-router-dom';


export class SwitchButton extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { text, link } = this.props;

        return (
            <div className='button'>
                <Link to={link} >
                    <Button variant="contained" color="primary" className='button'>
                        {text}
                    </Button>
                </Link>
            </div >
        );
    }
}



