import React from 'react';
import SHOP_DATA from './shop.data.js';
import PreviewCollection from '../../components/preview-collection/preview-collection.component.jsx';

class ShopPage extends React.Component {
	constructor(props) {
		super();

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(collection => (
					<PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
				))}
			</div>
		);
	}
}

export default ShopPage;
