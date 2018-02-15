import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { getOneItem, toggleComplete, deleteItem } from '../actions';

class ViewItem extends Component {
	componentDidMount() {
		this.props.getOneItem(this.props.match.params.id);
	}

	handleComplete(id) {
		this.props.toggleComplete(id);
	}

	handleDelete(id) {
		this.props.deleteItem(id).then(() => {
			this.props.history.push('/');
		});
	}

	render() {
		let unixDate = new Date(parseInt(this.props.item.created));
		let date = unixDate.toLocaleString();

		return (
			<div>
				<h1 className="text-center">View Item Details</h1>
				<div className="row justify-content-end">
					<Link to="/" className="btn btn-outline-primary">
						Go Back
					</Link>
				</div>
				<h3>Title: {this.props.item.title}</h3>
				<p>ID:{this.props.match.params.id}</p>
				<p>Details: {this.props.item.details}</p>
				<p>Create: {date}</p>
				<p>Status: {this.props.item.complete ? 'Complete' : 'Incomplete'}</p>
				<button type="button" onClick={() => this.handleComplete(this.props.item._id)}>
					Complete
				</button>
				<button type="button" onClick={() => this.handleDelete(this.props.item._id)}>
					Delete
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.todo.single
	};
}

export default connect(mapStateToProps, { getOneItem, toggleComplete, deleteItem })(ViewItem);
