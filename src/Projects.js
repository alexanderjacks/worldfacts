import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import BasicPopup from './BasicPopup';

const projects = [
	{key: 1, favicon: "images/favicon1.png", screen: "images/screens/1a.png", name:'Colors of Crypto', techs:'React, API, Bootstrap', siteURL: 'https://colors-crypto.firebaseapp.com', ghURL: 'https://github.com/alexanderjacks/colors-crypto', about: "A list of the current 200 most valuable crypto-currencies, according to 'real money' investment. The API this app pulls from updates every 5 minutes. I built this for personal use, when I was hobby speculating in crypto markets in early 2018. As a quick way to slice through the hundreds of coin and altcoin markets, this app is surprisingly useful for a homemade project. I got completely carried away assigning color branding per coin but oh well..."},
	{key: 2, favicon: "images/favicon2.png", screen: "images/screens/2a.png", name:'FWT Helper', techs:'Angular, Bootstrap, Pixlr', siteURL: 'https://fwt-helper.firebaseapp.com/', ghURL: 'https://github.com/Adjectival/fwt-helper', about: "A capstone-ish project from code bootcamp, and a custom app built for my BFF who plays this mobile game Fantasy War Tactics that has a ton of characters. Before the game added its own feature to help sort the army of characters, I built this app in Angular2/4. The images are mostly from a wikia, but newer character images came from in-game screencaps which I then trimmed down in the (formerly awesome) web app Pixlr. Card colors reflect one of the character data attributes, as this was the first time I realized I could link CSS classes directly to the data layer. ^_^"},
	{key: 3, favicon: "images/favicon3.png", screen: "images/screens/3a.png", name:'Monster Party', techs:'Vue, SweetAlert, Coinhive', siteURL: 'http://monster-party.surge.sh', ghURL: 'https://github.com/alexanderjacks/monster-pets', about: "Halloween-themed Pokémon joke using SweetAlert, one of the coolest 3rd-party libraries out there: gaining so much control over pop-up windows is amazing. Vue.js is also amazingly fun to build with, as it demands less code and formatting than React. I added a widget from Coinhive that will mine crypto-currency in your browser instance while you're on this app-- I'm surprised how easy it is to accomplish browser mining, and plan to keep researching this new trend."},
	{key: 4, favicon: "images/favicon4.png", screen: "images/screens/4a.png", name:'Bridges of Portland', techs:'GatsbyJS, Gatsby starter, pics from my phone', siteURL: 'http://Pdx-Bridges.surge.sh', ghURL: 'https://github.com/alexanderjacks/lightbox-boiler', about: "Leveraged a GatsbyJS starter to show off my own photos of the charming bridges of my hometown. Gatsby is the best way I've found to build static React apps super-fast, and many starters provide more features than the beloved Create React App. Definitely will be learning more about Gatsby and GraphQL in the future."},
	{key: 5, favicon: "images/favicon5.png", screen: "images/screens/5a.png", name:'How To Crypto', techs:'Angular, MDBAngular, FontAwesome', siteURL: 'https://how-to-crypto.herokuapp.com/', ghURL: 'https://github.com/Adjectival/how-to-crypto', about: "My first tutorial site, also an exploration of the impressive MDBootstrap library. I planned out the required steps to do stuff with crypto-currency, then used FontAwesome and screencaps to organize the information."},
	{key: 6, favicon: "images/favicon6.png", screen: "images/screens/6a.png", name:'115th Congress', techs:'React, Python scripts, SVG', siteURL: 'https://us-congress.firebaseapp.com//', ghURL: 'https://github.com/alexanderjacks/congress_scraper', about: "Latest test of my web scraping abilities... I used a Python script to collate the data on all members of the current US Congress from .gov resources, then built this no-frills React app to list them out. Portraits are also from an official government site. SVG graphics were found as freeware and added. This definitely could use some more features, such as filters and a name or state search, but it works as a proof of concept for a custom dataset via Python web scraping."},
	{key: 7, favicon: "images/favicon7.png", screen: "images/screens/7a.png", name:'React Native Catalog', techs:'React Native, Sketch for wireframing', siteURL: 'https://github.com/Adjectival/RN-catalog', ghURL: 'https://github.com/Adjectival/RN-catalog', about: "Here's a nice example of some wireframing, from the days before I got into making PWAs (progressive web apps). This app was built from a tutorial to explore the versatile mobile development framework React Native. App wasn't ever deployed to App Store or Google Play, but that's the goal with React Native-- build it once, use it on all smart phones! Of course, PWAs are websites that can be downloaded to your Home Screen, so why worry about an app store anymore??"}
];

const projectList = projects.map((project) =>
	<Card key={project.key} className="my-4 py-2 card-buffer">
		<div className="img-shield">
			<CardImage className="img-fluid" src={project.screen} />
		</div>
		<CardBody className="pink-accent">
			<CardTitle className="">
				<a href={project.siteURL.toString()}>
					<img className="favicon mr-2" src={project.favicon} />
					{project.name.toString()}
				</a>
			</CardTitle>
			<CardText>
					{project.techs.toString()}
				<br/>
				<a href={project.ghURL.toString()}>
					<code>Code on Github</code>
				</a>
				<div className="d-flex justify-content-center">
					<Button
						color="warning"
						href={project.siteURL.toString()}
						target="_blank"
					>
						View Project
					</Button>
					<BasicPopup
						btnText="About Project"
						title={project.name.toString()}
						text={project.about.toString()}
					/>
				</div>
			</CardText>
		</CardBody>
	</Card>
);

class Projects extends Component {
	render() {
		return (
			<div className="important">{projectList}</div>
		)
	}
}

export default Projects;