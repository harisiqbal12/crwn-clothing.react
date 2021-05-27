import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// @NEWER WAY TO WRITE A HOC (A HOC COMPONENT RETURN A FUNCTIONAL COMPONENT)
// const WithSpinner =
// 	wrappedComponent =>
// 	({ isloading, ...otherprops }) => {
// return isloading ? (
// 	<SpinnerOverlay>
// 		<SpinnerContainer />
// 	</SpinnerOverlay>
// ) : (
// 	<wrappedComponent {...otherprops} />
// );
// // 	};

const WithSpinner = WrappedComponent => { 
const spinner = ({ isLoading, ...otherprops }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherprops} />
		);
	};

	return spinner;
};

export default WithSpinner;
