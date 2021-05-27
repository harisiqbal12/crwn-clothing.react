import React from 'react';

import Directory from '../../components/directory/directory.component.jsx';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
	<HomePageContainer>
		<Directory />
	</HomePageContainer>
);

React.createElement(HomePage);
export default HomePage;
