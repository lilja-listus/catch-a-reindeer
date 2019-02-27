import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastsContainer, ToastsStore } from 'react-toasts';



export class SpecialCharacters extends Component<any, any>{
    constructor(props) {
        super(props);

        this.state = {
            selectedCharacter: ''
        }
    }

    readonly charactersUdmKomi = ['e̮', 'i̮', 'č́', 'ć', 'č', 'ʒ́', 'ǯ', 'ń', "l'", "d'", 'ź', 'ś', 'š', 'ž'];
    readonly charactersMari = ['č́', 'ž', 'š', 'ə̑', "l'", 'ń', 'ö', 'ü', 'ä', 'ə', 'č', 'ŋ', 'β', 'γ'];
    readonly charactersHungarian = ['á', 'é', 'í', 'ó', 'ő', 'ú', 'ü', 'ű'];


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

        return (
            <div className='special-characters'>
                <ToastsContainer store={ToastsStore} />
                <div>Writing a paper and need some special characters?  <p>Just click on one and get it co pied to your buffer</p></div>
                <div className="text">
                    <div>Udmurtti ja komi: </div>
                    <div className="characters">{React.Children.toArray(mapUdmKomi)}</div>
                    <div>Mari: </div>
                    <div className="characters"> {React.Children.toArray(mapMari)} </div>
                    <div>Unkari: </div>
                    <div className="characters">{React.Children.toArray(mapHungarian)} </div>
                </div>
                <SwitchButton text={'home'} link={'/'} />
            </div>
        );
    }
}