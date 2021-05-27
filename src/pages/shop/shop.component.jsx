import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import {
	firestore,
	convertCollectionSnapshopToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
	}
	unsubscribeFromSnapchot = null;

	 componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		 collectionRef.onSnapshot(async snapshot => {
			const collectionMap = convertCollectionSnapshopToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}
	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionOverviewWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={this.state.loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
