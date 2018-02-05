import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewUserForm from './new-user-form';
import Notes from './notes';

class LoginPage extends Component {

	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="username"/>
					<input type="text" placeholder="password"/>
				</form>
				<form action="#mainnotespageid">
					<input type="submit" value="Log In"/>
				</form>
				<p>First time visitor? Create an account <a href="#userformid">here</a>.</p>
			</div>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		error: state.error
// 	};
// };

export default LoginPage;