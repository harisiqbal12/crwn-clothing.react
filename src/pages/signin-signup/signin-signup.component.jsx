import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import Signup from '../../components/sign-up/sign-up.component.jsx';

import './signin-signup-styles.scss';

const SignInAndSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<Signup />
		</div>
	);
};

export default SignInAndSignUpPage;
