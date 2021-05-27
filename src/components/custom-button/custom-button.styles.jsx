import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyleds = css`
	background-color: white;
	color: black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
		transition: 0.5s;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	margin-left: 1rem;
	border: none;
	padding: 25px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid #4285f4;

	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyleds : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin-top: 1rem;
	${getButtonStyles}
`;
