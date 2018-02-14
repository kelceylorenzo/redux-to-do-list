import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllToDos } from '../actions';

class Home extends Component {
	componentDidMount() {
		this.props.getAllToDos();
	}

	render() {
		return (
			<div className="text-center">
				<h1>To do list will go here!</h1>
				<p>Now with Redux!</p>
			</div>
		);
	}
}

export default connect(null, { getAllToDos })(Home);
