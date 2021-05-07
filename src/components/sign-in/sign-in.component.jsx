import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			passsword: '',
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({ email: '', passsword: '' });
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
						value={this.state.email}
						handleChange={this.handleChagne}
            label="password"
						required
					/>

					<CustomButton type="submit"> Sign in </CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
