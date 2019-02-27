import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export class SpecialCharacters extends Component<any, any>{
    constructor(props) {
        super(props);

        this.state = {
            selectedCharacter: ''
        }
    }

    //readonly charactersUdmKomi = ['e̮', 'i̮', 'č́', 'ć', 'č', 'ʒ́', 'ǯ', 'ń', "l' ", "d' ", 'ź', 'ś', 'š', 'ž'];

    onCharacterClick = (character: string) => {
        this.setState({ selectedCharacter: character })

    }



    public render() {

        const characterToDiv = (character) => {
            return (
                <CopyToClipboard text={this.state.selectedCharacter} options={{ debug: true }}
                    onCopy={() => console.log(this.state.selectedCharacter)}>

                    <div onClick={(e: any) => {
                        this.setState({ selectedCharacter: character })
                    }}
                        className="character"> {character}</div>
                </CopyToClipboard>

            )
        }

        const charactersUdmKomi = ['e̮', 'i̮', 'č́', 'ć', 'č', 'ʒ́', 'ǯ', 'ń', "l' ", "d' ", 'ź', 'ś', 'š', 'ž'];
        const charactersMari = ['č́ ', 'ž ', 'š ', 'ə̑ ', "l' ", 'ń ', 'ö ', 'ü ', 'ä ', 'ə ', 'č ', 'ŋ ', 'β ', 'γ'];
        const charactersHungarian = ['á', 'é', 'í', 'ó', 'ő', 'ú', 'ü', 'ű'];

        const mapUdmKomi = charactersUdmKomi.map(characterToDiv);
        const mapMari = charactersMari.map(characterToDiv);
        const mapHungarian = charactersHungarian.map(characterToDiv);



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

            </div>


        );
    }
}