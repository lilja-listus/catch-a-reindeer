import React, { Component } from 'react';
import './index.scss';
import { SwitchButton } from '../../components/button';
import strings from '../../common/data/localized-strings';

export class AboutPage extends Component<any, any>{

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className="about">
                <div className="about-name"> What is this project? </div>
                <div className="about-text">
                    <p>
                        {strings.about}
                    </p>

                </div>
                <img
                    alt="Poro"
                    className="poro-img"
                    src="https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aadacfd405bcb202e81895ca188ec8a3&auto=format&fit=crop&w=282&q=80"
                />


                <SwitchButton text={'Home'} link={'/'} />


            </div>
        );
    }
}