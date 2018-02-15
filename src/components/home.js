import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllToDos } from '../actions';

class Home extends Component {
	componentDidMount() {
		this.props.getAllToDos();
	}

	render() {
		console.log('props: ', this.props);
		const listItems = this.props.todoList.map((item, index) => {
			return (
				<li className="list-group-item" key={index}>
					{item.title}
				</li>
			);
		});
		return (
			<div className="text-center">
				<h1>To do list will go here!</h1>
				<p>Now with Redux!</p>
				<ul className="list-group">{listItems}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		todoList: state.todo.all
	};
}

export default connect(mapStateToProps, { getAllToDos })(Home);
