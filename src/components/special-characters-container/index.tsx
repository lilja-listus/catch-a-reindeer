import React, { Component } from 'react';
import './index.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastsContainer, ToastsStore } from 'react-toasts';

export class SpecialCharactersContainer extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            selectedCharacter: ''
        }
    }

    readonly charactersUdmKomi = ['č', 'ć', 'č́', "d'", 'e̮', 'i̮', "l'", 'ń', 'š', 'ś', "t'", 'ž', 'ź', 'ǯ', 'ʒ́'];
    readonly charactersMari = ['ä', 'β', 'č', 'č́', 'ə', 'ə̑', 'γ', "l'", 'ń', 'ŋ', 'ö', 'š', 'ü', 'ž',];
    readonly charactersHungarian = ['á', 'é', 'í', 'ó', 'ő', 'ú', 'ü', 'ű'];
    readonly charactersMordvalais = ['ä', 'ć', 'č́', "d'", 'ə', 'ï', "l'", 'ń', 'ŕ', 'š', 'ś', "t'", 'χ', 'ž', 'ź'];

    onCharacterClick = (character: string) => {
        this.setState({ selectedCharacter: character })
    }

    public render() {
        const characterToDiv = (character) => {
            return (
                <CopyToClipboard text={this.state.selectedCharacter} options={{ debug: true }}
                    onCopy={() => ToastsStore.success(`${character} copied`)}>

                    <div onClick={(e: any) => {
                        this.setState({ selectedCharacter: character })
                    }}
                        className="character"> {character}</div>
                </CopyToClipboard>
            )
        }

        const mapUdmKomi = this.charactersUdmKomi.map(characterToDiv);
        const mapMari = this.charactersMari.map(characterToDiv);
        const mapHungarian = this.charactersHungarian.map(characterToDiv);
        const mapMordvalais = this.charactersMordvalais.map(characterToDiv);

        return (<div className='special-characters-container'>

            <ToastsContainer store={ToastsStore} />
            <div className="text">
                <div>Udmurtti ja komi: </div>
                <div className="characters">{React.Children.toArray(mapUdmKomi)}</div>
                <div>Mari: </div>
                <div className="characters"> {React.Children.toArray(mapMari)} </div>
                <div>Unkari: </div>
                <div className="characters">{React.Children.toArray(mapHungarian)} </div>
                <div>Mordvalaiskielet:</div>
                <div className="characters">{React.Children.toArray(mapMordvalais)} </div>

            </div></div>
        );
    }
}