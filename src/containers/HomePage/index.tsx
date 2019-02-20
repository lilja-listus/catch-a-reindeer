import React, { Component } from 'react';
import './index.scss';
import { SearchBar } from '../../components/search-bar';
import algoliasearch from 'algoliasearch';
import { HitsContainer } from '../../components/hits-container';

const app = document.getElementById("hits-container");

class App extends Component<any, any> {

  constructor(props) {
    super(props);

    this.state = {
      query: '',
      event: null
    };
  }

  private search(query) {
    let client = algoliasearch('UFI1GERD33', '0f949363e44d09d51dd523165f9f36a0');
    let index = client.initIndex('conferences');
    let events = new Array();

    index.search(query).then(result => {
      const hits = result.hits;
      hits.forEach((element) => {
        let name = element.name;
        let dates = element.start_date + ' - ' + element.end_date;
        let links = element.links;
        let listOfLinks = '';

        links.forEach((link) => {
          if (link !== '') {
            listOfLinks += '<a>' + link + '</a>' + ', ';
          }
        });

        let location = element.location.country.eng + ", " + element.location.city.eng;
        let event = "<em>" + name + "</em>" +
          " (" + dates + ") " + "</br>" +
          " learn more at: " + listOfLinks + "</br>" +
          "location: " + location + "</br>";

        events.push(event);
        events.push("</br>");
        events.push("<div><img src='algolia-logo.svg'></img></div>");

      });
    });
  }

  public render() {
    const { events } = this.state;

    return (
      <div className="catch-a-reindeer">

        <div className="App-title">Catch a Reindeer</div>

        <SearchBar />

        <div className="Greeting">
          <p id="welcome-text"> Welcome to the place where you can find info about all upcoming events in the Finno-Ugric world </p>
        </div>
        <HitsContainer events={events} />
      </div>);
  }
}

export default App; 