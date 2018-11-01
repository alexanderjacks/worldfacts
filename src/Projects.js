import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

const projects = [
	{name:'Colors of Crypto', techs:'React, API, Bootstrap', siteURL: '', ghURL: 'https://github.com/alexanderjacks/colors-crypto'},
	{name:'FWT Helper', techs:'Angular, Bootstrap, Pixlr', siteURL: '', ghURL: 'https://github.com/Adjectival/fwt-helper'},
	{name:'Monster Party', techs:'Vue, SweetAlert, Coinhive', siteURL: '', ghURL: 'https://github.com/alexanderjacks/monster-pets'},
	{name:'Bridges of Portland', techs:'GatsbyJS', siteURL: '', ghURL: 'https://github.com/alexanderjacks/lightbox-boiler'},
	{name:'How To Crypto', techs:'Angular, MDBAngular', siteURL: '', ghURL: 'https://github.com/Adjectival/how-to-crypto'},
	{name:'115th Congress', techs:'React, Python scripts', siteURL: '', ghURL: 'https://github.com/alexanderjacks/congress_scraper'},
	{name:'React Native Catalog', techs:'React Native, wireframing', siteURL: '', ghURL: 'https://github.com/Adjectival/RN-catalog'}
];

const projectList = projects.map((project) =>
	<Card key={project.name} className="my-4 mx-3 py-2">
		<CardBody className="light-blue">
			<CardTitle className="red-text">{project.name.toString()}</CardTitle>
			<CardText>
				{project.techs.toString()}<br/>
				{project.ghURL.toString()}
			</CardText>
		</CardBody>
	</Card>
);

class Projects extends Component {
	render() {
		return (
			<div>{projectList}</div>
		)
	}
}

export default Projects;