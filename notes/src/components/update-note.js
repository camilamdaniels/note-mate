import React from 'react';

const UpdateNote = props => {
	return (
		<form>
			<input placeholder={props.note.title}/>
			<input placeholder={props.note.body}/>
		</form>
	)
}

export default UpdateNote;

// we need to add a button to this component 
// when the button is clicked, it needs to change the content stored to that note
// so the functionality should be similar to the add new note button
// you should start by referencing the create-note-form file

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import { updateNote, addNote } from '../actions/index';

// class UpdateNote extends Component {
// 	state = {
// 		title: this.props.note.title,
// 		body: this.props.note.body
// 	};

// 	handleInputChange = event => {
// 		this.setState({[event.target.name] : event.target.value});
// 	};

// 	handleUpdateNote = _ => {
// 		const { title, body } = this.state;
// 		// this.props.updateNote({title, body});
// 		this.props.addNote({title, body});
// 	};

// 	render() {
// 		return (
// 			<form>
// 				<input 
// 					type="text"
// 					value={this.state.title}
// 					placeholder={this.state.title}
// 					onChange={this.handleInputChange}
// 					name="title"
// 					/>
// 				<div className="text-box">
// 					<input 
// 						type="text"
// 						value={this.state.body}
// 						placeholder={this.state.body}
// 						onChange={this.handleInputChange}
// 						name="body"
// 					/>
// 				</div>
// 				<input 
// 					type="submit"
// 					value="Update Note"
// 					onClick={() => {
// 						this.handleUpdateNote();
// 					}}
// 					/>
// 			</form>
// 		)
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		error: state.error,
// 		updatingNote: state.updatingNote
// 	}
// }

// export default withRouter(connect(mapStateToProps, { updateNote, addNote })(UpdateNote));
