import React, { Component } from 'react';
import './App.css';

import Projects from './Projects';
import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';
import EnvelopeIcon from './EnvelopeIcon';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Alexander Jacks's web app portfolio
          </h1>
          <div className="row">
            <div className="col">
              <img
                src="images/bizcard.png"
                className="img-fluid"
               /><br/>
               <h4>
                Perhaps you've seen my business card?
               </h4>
               <h5>
                (I used Sketch)
               </h5>
            </div>
            <div className="d-flex align-items-center col-md-6">
              <div className="mx-auto">
                <BasicPopup
                  btnText="Companies I've worked with"
                  title="Proud to consult with..."
                  text="Minority Veterans of America, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com"
                  confirmButtonText="Outsanding!"
                />
                <BasicPopup
                  btnText="More about Alex"
                  btnColor="secondary"
                  title="My Journey in Tech, in Brief"
                  text="I built my first website in 1997, and figured out how to host it on the local ISP after I read enough BBS posts about FTP clients. I decided I wanted to do this professionally, so a few years later I enrolled in a Web Programming school in NYC and learned industry best-practices and even built my own GUI in Java! Then 9/11 went down, and I was traumatised and angry enough to join the US Air Force, where I began an intense 5-year career as a data and voice network sysadmin. Years later I used the 9/11 GI Bill to complete a Psychology degree, but I still missed working with technology and designing user experiences. So in 2017 I finished a code school in Portland, Oregon and learned how to work with current JS frameworks like React, Vue, Angular, (even Ember, in theory!) and how to leverage tools like Github, Bootstrap, Sass, FontAwesome, and more. I've been consulting as a web developer since 2015 (before code school, even) and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and Agile dev. Right now I'm volunteering with Code4PDX which is tuning me in to team development practices, and I'm also volunteering to build a site for Minority Veterans of America, which is helping me learn the Agile methodology and become comfy doing code reviews and PRs on Github. Thanks for reading all of this!"
                  confirmButtonText="Right on 💪"
                />
                <SocialLinks />
              </div>
            </div>
          </div>

          <p className="font-bold black-text">
            Below are some examples of my design, development, and deployment chops.<br/><a href="mailto:alexdjacks@gmail.com" className="navy-link"><EnvelopeIcon /> Email me for more details.</a>
          </p>
        </header>
        <Projects/>
        <footer className="important my-3">
          <SocialLinks />
          <p>Copyright Alexander Jacks, 2018
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
