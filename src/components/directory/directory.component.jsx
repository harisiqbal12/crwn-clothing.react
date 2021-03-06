import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component.jsx';

import './directory.styles.scss';

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(section => (
				<MenuItem
					key={section.id}
					title={section.title.toUpperCase()}
					imageUrl={section.imageUrl}
					size={section.size}
					linkUrl={section.linkUrl}
				/>
			))}
		</div>
	);
};
React.createElement(Directory);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
