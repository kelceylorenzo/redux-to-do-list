import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class AddForm extends Component {
	renderInput(props) {
		return (
			<div className="form-group">
				<label>{props.label}</label>
				<input {...props.input} type="text" className="form-control" />
				<p className="text-danger">{props.meta.touched && props.meta.error}</p>
			</div>
		);
	}

	handleAddItem(values) {
		console.log('Adding item: ', values);
		this.props.addItem(values).then(() => {
			this.props.history.push('/');
		});
	}

	render() {
		console.log('add form  props', this.props);
		return (
			<form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))}>
				<h1 className="text-center">Add To Do Item</h1>
				<div className="justify-content-end row">
					<Link className="btn btn-outline-primary" to="/">
						Go Back
					</Link>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<Field name="title" label="Title" component={this.renderInput} />
						<Field name="details" label="Details" component={this.renderInput} />
						<div className="row justify-content-end">
							<button type="button" className="btn btn-outline-danger" onClick={this.props.reset}>
								Reset
							</button>
							<button type="submit" className="btn btn-outline-success mx-3">
								Add Item
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

function validate(values) {
	const error = {};

	if (!values.title) {
		error.title = 'Please enter a title';
	}

	if (!values.details) {
		error.details = 'Please enter details';
	}

	return error;
}

AddForm = reduxForm({
	form: 'Add-item-form',
	validate: validate
})(AddForm);

export default connect(null, { addItem })(AddForm);
