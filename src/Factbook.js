import React, {Component} from 'react';
import axios from 'axios';

class Factbook extends Component {

	constructor(props){
		super(props)
		this.state = {
			users: [],
			store: []
		}
	}

	componentDidMount() {
	    axios.get('factbook.json')
	    	.then(json => console.log(json.data.countries[0].data.introduction))
  	}
	
	render () {
		return (
			<div>
				<h2>Get your emojis ready 😈🇨🇦
				</h2>
			</div>
        );
	}
}
export default Factbook;
