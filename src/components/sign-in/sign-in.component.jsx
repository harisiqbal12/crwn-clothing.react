import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', passsword: '' });
		} catch (err) {
			alert(err.message);
			console.log(err);
		}
	};

	handleChagne = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I Already have an account</h2>
				<span>Sign in with you email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChagne}
						label="email"
						required
					/>

					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChagne}
						label="password"
						required
					/>

					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton
							onClick={signInWithGoogle}
							isGoogleSignIn
						>
							{' '}
							Sign in with google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
