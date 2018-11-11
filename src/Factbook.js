import React, {Component, List} from 'react';
import axios from 'axios';

class Factbook extends Component {

	constructor(props){
		super(props)
		this.state = {
			store: [],
			nations: []
		}
	}

	componentDidMount() {
	    axios.get('factbook.json')
	    	.then(json => json.data.nations.map(nation => (
	    	{
	    		name: `${nation.data.name}`,
	    		geo: `${nation.data.geography.area.total.value}`,
	    		intro: `${nation.data.introduction.background}`
	    	})))
	    	.then(newData => this.setState({nations: newData}))
  	}
	
	render () {
		return (
			<div className="big-list">
				<h2>Nations/Regions of the World
				</h2>
				<ul className="list-group">
					{this.state.nations.map(function(nation, i){
						return <li key={i} className="list-group-item">
							<h5>{nation.name}</h5>
							<h6>{nation.geo} sq.km </h6>
							<p className="tiny-text">{nation.intro}</p>
						</li>
					}
					)}
				</ul>
			</div>
        );
	}
}
export default Factbook;
