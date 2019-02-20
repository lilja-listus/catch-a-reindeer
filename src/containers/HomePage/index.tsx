import React, { Component } from 'react';
import './index.scss';
import { SearchBar } from '../../components/search-bar';

const app = document.getElementById("hits-container");

class App extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  public render() {
    return (
      <div className="catch-a-reindeer">

        <div className="App-title">Catch a Reindeer</div>

        <SearchBar />

        <div className="Greeting">
          <p id="welcome-text"> Welcome to the place where you can find info about all upcoming events in the Finno-Ugric world </p>
        </div>
      </div>);
  }
}

export default App; 