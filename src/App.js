import React, { Component } from 'react';
import './App.css';

import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';

import Factbook from './Factbook';
import PopGrowthVsFossilPower from './PopGrowthVsFossilPower';
import PopulationTreeMap from './PopulationTreeMap';
import NivoWaffle from './NivoWaffle';

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
          <p className="text-white">Copyright <a href="http://alexanderjacks-services.surge.sh/">Alexander Jacks</a>, 2018. MIT License!
          </p>
          <BasicPopup
            btnColor="unique"
            btnText="What's All This?"
            title="Via The Factbook"
            text="One of the first websites I remember losing time on was the CIA's World Factbook, back in the '90s. It took a long time to access with dial-up internet! I've decided to use the modern Factbook's data as I explore D3 and data cleaning techniques. Stay tuned, I'll keep adding to this resource as I learn more."
            confirmButtonText="Radical 🤙"
          />
          <div className="row">
            
          </div>
        </header>
        <div className="nivopoptree blk-frame">
          <PopulationTreeMap />
        </div>
        <h6>World's 238 National Populations TreeMap
        </h6>

        <div className="nivogrowthpower blk-frame">
          <PopGrowthVsFossilPower />
        </div>
        <h6>Annual % Population Growth vs. %'age Fossil Fuel Power Plants
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
