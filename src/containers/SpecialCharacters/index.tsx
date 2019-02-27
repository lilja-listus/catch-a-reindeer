import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';
import { SpecialCharactersContainer } from '../../components/special-characters-container';



export class SpecialCharacters extends Component<any, any>{
    public render() {
        return (
            <div className='special-characters'>
                <div>Writing a paper and need some special characters?  <p>Just click on one and get it co pied to your buffer</p></div>
                <SpecialCharactersContainer />
                <SwitchButton text={'home'} link={'/'} />
            </div>
        );
    }
}