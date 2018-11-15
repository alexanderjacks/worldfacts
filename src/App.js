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
            🌐 Worldfacts w/ D3
          </h1>
          <h4>
            React is made for engineers 🤓
          </h4>
          <h5>
            But designers can learn to use it, too 👨‍🎤
          </h5>
          <div className="row">
            
          </div>
        </header>
        <div className="nivopoptree blk-frame">
          <PopulationTreeMap />
        </div>
        <h6>Worlds' 238 Populations TreeMap
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
