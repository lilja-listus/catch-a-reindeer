import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';
import { SpecialCharactersContainer } from '../../components/special-characters-container';
import strings from '../../common/data/localized-strings';


export class SpecialCharacters extends Component<any, any>{
    public render() {
        return (
            <div className='special-characters'>
                <div> {strings.needCharacters}<p>{strings.justClick}</p></div>
                <SpecialCharactersContainer />
                <SwitchButton text={'home'} link={'/'} />
            </div>
        );
    }
}