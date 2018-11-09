import React, { Component } from 'react';
import { ResponsiveWaffleHtml } from '@nivo/waffle'
import { ResponsiveCalendar } from '@nivo/calendar'
import './App.css';

import BasicPopup from './BasicPopup';
import SocialLinks from './SocialLinks';
import NivoCalendar from './NivoCalendar';

class App extends Component {
  state = true;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            React FE Templ8
          </h1>
          <div className="row">
            <div className="col">
              <img
                src="images/bizcard.png"
                className="img-fluid"
                alt="my business card"
               /><br/>
               <h5>
                By Alexander Jacks
               </h5>
            </div>
            <div className="d-flex justify-content-around flex-column col-md-6">
              <div className="mx-auto">
                <BasicPopup
                  btnText="Companies I've worked with"
                  title="Proud to consult with..."
                  text="Minority Veterans of America, Blackwood Housekeeping, JENIE.com, Veteran Mentor Network, Sitecast.com"
                  confirmButtonText="Outsanding!"
                />
                <BasicPopup
                  btnText="About this FE Templ8"
                  btnColor="orange"
                  title="Front-end Development Kit"
                  text="Styling library MDBootstrap included. Some Nivo modules showcased. FontAwesome5 CDN set up. SweetAlert components ready to use."
                  confirmButtonText="Way to Be! ✌️"
                />
                <BasicPopup
                  btnText="More about Alex"
                  btnColor="purple"
                  title="My Journey in Tech, in Brief"
                  text="I built my first website in 1997, and figured out how to host it on the local ISP after I read enough BBS posts about <strong><em>FTP</em></strong> clients. I decided I wanted to do this professionally, so a few years later I enrolled in a Web Programming school in NYC and learned industry best-practices and even built my own <strong><em>GUI</em></strong> in <strong><em>Java</em></strong>! Then 9/11 went down, and I was traumatised and angry enough to join the US Air Force, where I began an intense 5-year career as a <strong><em>data and voice network sysadmin</em></strong>. Years later I used the 9/11 GI Bill to complete a Psychology degree, but I still missed working with technology and designing user experiences. <p>So in 2017 I finished a code school in Portland, Oregon and learned how to work with current JS frameworks like <strong><em>React</em></strong>, <strong><em>Vue</em></strong>, <strong><em>Angular</em></strong>, (even <strong><em>Ember</em></strong>, in theory!) and how to leverage tools like <strong><em>Github</em></strong>, <strong><em>Bootstrap</em></strong>, <strong><em>Sass</em></strong>, <strong><em>FontAwesome</em></strong>, and more. I've been consulting as a web developer since 2015 (before code school, even) and am searching for a full time role in the Portland, Oregon area so I can supercharge my front-end learnings with some mentorship and <strong><em>Agile dev</em></strong>. Right now I'm volunteering with Code4PDX which is tuning me in to team development practices, and I'm also volunteering to build a site for Minority Veterans of America, which is helping me learn the <strong><em>Agile</em></strong> methodology and become comfy doing code reviews and PRs on <strong><em>Github</em></strong>. Thanks for reading all of this!</p>"
                  confirmButtonText="Right on! 🙏"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="nivochart">
        <ResponsiveWaffleHtml
          data={[
            {
              "id": "wine",
              "label": "wine",
              "value": 41.2424,
              "color": "wine"
            },
            {
              "id": "amethyst",
              "label": "amethyst",
              "value": 32.33323,
              "color": "amethyst"
            },
            {
              "id": "lilac",
              "label": "lilac",
              "value": 23.0032,
              "color": "lilac"
            }
          ]}
          total={100}
          rows={18}
          columns={14}
          margin={{
              "top": 10,
              "right": 10,
              "bottom": 10,
              "left": 10
          }}
          colors="purple_orange"
          colorBy="id"
          borderColor="inherit:darker(0.8)"
          animate={true}
          motionStiffness={90}
          motionDamping={11}
        />
        </div>
        <h6>Nivo Waffle
        </h6>

        <div className="nivocalendar">
          <NivoCalendar />
        </div>
        <h4>Nivo Calendar
        </h4>

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
