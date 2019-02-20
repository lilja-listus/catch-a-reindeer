import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Component } from 'react';
import './index.scss';



export class SearchBar extends Component<any, any> {

    constructor(props) {
        super(props);
    }

    public render() {

        return (
            <Paper className='root' elevation={1}>

                <InputBase className='inputField' placeholder="Search" />
                <IconButton className='iconButton' aria-label="Search">
                    <SearchIcon />
                </IconButton>

            </Paper>
        );
    }
}




