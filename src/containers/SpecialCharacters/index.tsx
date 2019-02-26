import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';

export class SpecialCharacters extends Component<any, any>{
    public render() {
        const charactersUdmKomi = ['e̮', 'i̮', 'č́', 'ć', 'č', 'ʒ́', 'ǯ', 'ń', 'l', '&#39;', 'd', '&#39;', 'ź', 'ś', 'š', 'ž'];
        const charactersMari = ['č́ ', 'ž ', 'š ', 'ə̑ ', 'l&#39; ', 'ń ', 'ö ', 'ü ', 'ä ', 'ə ', 'č ', 'ŋ ', 'β ', '(γ) '];

        // const divMari = (charactersMari).map(character => {
        //     (<div>{character}</div>)
        // });

        // console.log(divMari);

        return (
            <div className='special-characters'>
                <div className="text">        SUT
                    <div>Udmurtti ja komi: {React.Children.toArray(charactersUdmKomi)}</div>
                    <div> Mari: {React.Children.toArray(charactersMari)} </div>
                </div>
                <SwitchButton text='home' link='/' />

            </div>
        );
    }
}