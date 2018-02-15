import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<Link to={`item/${item._id}`}>{item.title}</Link>
				</li>
			);
		});
		return (
			<div>
				<div className="text-center">
					<h1>To do list will go here!</h1>
					<p>Now with Redux!</p>
				</div>

				<div className="row justify-content-center my-4">
					<Link to="/add-item" className="btn btn-outline-primary">
						Add Item
					</Link>
				</div>

				<ul className="list-group row">{listItems}</ul>
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
