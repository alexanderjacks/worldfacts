import React, { Component } from 'react';
import './App.css';

import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';

import Factbook from './Factbook';
import NivoCalendar from './NivoCalendar';
import PopulationTreeMap from './PopulationTreeMap';
import NivoWaffle from './NivoWaffle';
import NivoVoronoi from './NivoVoronoi';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            🌐 Worldfacts via the <a href="https://www.cia.gov/library/publications/the-world-factbook/">C.I.A</a> 🇺🇸
          </h1>
          <h4>
            <a href="https://reactjs.org/docs/create-a-new-react-app.html">React</a> and lots of JSON
          </h4>
          <h5>
            D3 powered by <a href="http://nivo.rocks">nivo.rocks</a>
          </h5>
          <SocialLinks />
          <p className="text-white">Copyright Alexander Jacks, 2018. MIT License!
          </p>
          <div className="row">
            
          </div>
        </header>
        <div className="nivopoptree blk-frame">
          <PopulationTreeMap />
        </div>
        <h6>World's 238 Populations TreeMap
        </h6>
        <div className="important blk-frame">
          <Factbook />
        </div>

        <footer className="important my-3">
          <SocialLinks />
          <p className="text-white">Copyright Alexander Jacks, 2018. MIT License!
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
