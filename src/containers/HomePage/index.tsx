import React, { Component } from 'react';
import './index.scss';
import { SearchBar } from '../../components/search-bar';
import { SwitchButton } from '../../components/button';

export class HomePage extends Component<any, any> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="catch-a-reindeer">
        <div className="App-title">Catch a Reindeer</div>
        <SearchBar />
        <div className='buttons'>
          <SwitchButton text={'about'} link={'/about'} />
          <SwitchButton text={'special characters'} link={'/characters'} />
        </div>

      </div>);
  }
}

