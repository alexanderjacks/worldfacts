import React, { Component } from 'react';

const projects = ['Colors of Crypto','FWT Helper','Monster Party','Bridges of Portland','How To Crypto','115th Congress','React Native Catalog'];
const projectList = projects.map((project) =>
	<li>{project}
	</li>
);

class Projects extends Component {
	render() {
		return (
			<ul>{projectList}
			</ul>
		)
	}
}

export default Projects;