import React, { Component } from 'react';
import './index.scss';
import { SearchBar } from '../../components/search-bar';
import { AboutButton } from '../../components/about-button';

class App extends Component<any, any> {

  constructor(props) {
    super(props);

    this.state = {
      event: null,
    };
  }

  public render() {
    return (
      <div className="catch-a-reindeer">

        <div className="App-title">Catch a Reindeer</div>

        <SearchBar />

        <div className="Greeting">
          <p id="welcome-text"> Welcome to the place where you can find info about different events in the Finno-Ugric world </p>
        </div>
        <AboutButton />
      </div>);
  }
}

export default App; 