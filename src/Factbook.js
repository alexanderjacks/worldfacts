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
	    		name: `${nation.name}`,
	    		intro: `${nation.introduction.background}`,
	    		area: `${nation.geography.area.total.value}`,
	    		econ: `${nation.economy.overview}`
	    	})))
	    	.then(newData => this.setState({nations: newData}))
  	}
	
	render () {
		return (
			<div className="big-list">
				<h1>Nations/Regions of the World</h1>
				<h2>Intro and <span className="text-success">Economic</span> data</h2>
				<ul className="list-group">
					{this.state.nations.map(function(nation, i){
						return <li key={i} className="list-group-item">
							<h5>{nation.name}</h5>
							<h6>🌐 {nation.area} sq.km </h6>
							<p className="tiny-text">📚 {nation.intro}</p>
							<p className="text-success tiny-text">💰 {nation.econ}</p>

						</li>
					}
					)}
				</ul>
			</div>
        );
	}
}
export default Factbook;
