import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const projects = [
	{key: 1, favicon: "images/favicon1.png", name:'Colors of Crypto', techs:'React, API, Bootstrap', siteURL: 'https://colors-crypto.firebaseapp.com', ghURL: 'https://github.com/alexanderjacks/colors-crypto'},
	{key: 2, favicon: "images/favicon2.png", name:'FWT Helper', techs:'Angular, Bootstrap, Pixlr', siteURL: 'https://fwt-helper.firebaseapp.com/', ghURL: 'https://github.com/Adjectival/fwt-helper'},
	{key: 3, favicon: "images/favicon3.png", name:'Monster Party', techs:'Vue, SweetAlert, Coinhive', siteURL: 'http://monster-party.surge.sh', ghURL: 'https://github.com/alexanderjacks/monster-pets'},
	{key: 4, favicon: "images/favicon4.png", name:'Bridges of Portland', techs:'GatsbyJS', siteURL: 'http://Pdx-Bridges.surge.sh', ghURL: 'https://github.com/alexanderjacks/lightbox-boiler'},
	{key: 5, favicon: "images/favicon5.png", name:'How To Crypto', techs:'Angular, MDBAngular', siteURL: 'https://how-to-crypto.herokuapp.com/', ghURL: 'https://github.com/Adjectival/how-to-crypto'},
	{key: 6, favicon: "images/favicon6.png", name:'115th Congress', techs:'React, Python scripts, SVG', siteURL: 'https://us-congress.firebaseapp.com//', ghURL: 'https://github.com/alexanderjacks/congress_scraper'},
	{key: 7, favicon: "images/favicon7.png", name:'React Native Catalog', techs:'React Native, wireframing', siteURL: 'https://github.com/Adjectival/RN-catalog', ghURL: 'https://github.com/Adjectival/RN-catalog'}
];

const projectList = projects.map((project) =>
	<Card key={project.key} className="my-4 py-2">
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