import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './index.scss';

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

        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Type in a name, city, country, year etc." />
            <Glyphicon glyph="search"></Glyphicon>

          </InputGroup>


        </FormGroup>
        <div className="Greeting">
          <p id="welcome-text"> Welcome to the place where you can find info about all upcoming events in the Finno-Ugric world </p>
        </div>
      </div>);
  }
}

export default App; 