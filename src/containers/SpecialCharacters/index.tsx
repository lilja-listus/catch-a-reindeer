import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';

export class SpecialCharacters extends Component<any, any>{
    public render() {
        const charactersUdmKomi = ['e̮', 'i̮', 'č́', 'ć', 'č', 'ʒ́', 'ǯ', 'ń', "l' ", "d' ", 'ź', 'ś', 'š', 'ž'];
        const charactersMari = ['č́ ', 'ž ', 'š ', 'ə̑ ', "l' ", 'ń ', 'ö ', 'ü ', 'ä ', 'ə ', 'č ', 'ŋ ', 'β ', 'γ'];
        const charactersHungarian = ['á', 'é', 'í', 'ó', 'ő', 'ú', 'ü', 'ű'];

        const mapUdmKomi = charactersUdmKomi.map(character => (<div className="character"> {character}</div>));
        const mapMari = charactersMari.map(character => (<div className="character"> {character}</div>));
        const mapHungarian = charactersHungarian.map(character => (<div className="character"> {character}</div>));



        return (
            <div className='special-characters'>
                <div>Writing a paper and need some special characters?  <p>Just copy-paste them</p></div>


                <div className="text">
                    <div>Udmurtti ja komi: </div>
                    <div className="characters">{React.Children.toArray(mapUdmKomi)}</div>
                    <div>Mari: </div>
                    <div className="characters"> {React.Children.toArray(mapMari)} </div>
                    <div>Unkari: </div>
                    <div className="characters">{React.Children.toArray(mapHungarian)} </div>
                </div>
                <SwitchButton text='home' link='/' />

            </div>
        );
    }
}