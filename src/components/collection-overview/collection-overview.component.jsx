import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapSateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapSateToProps)(CollectionOverview);
