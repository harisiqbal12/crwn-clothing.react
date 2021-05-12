import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { clearItemFromCart } from '../../redux/cart/cart.action';

import './checkout.styles.scss';

const CheckOutPage = ({ cartItems, total, clearItem }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(cartItem => (
				<CheckOutItem key={cartItem.id} cartItem={cartItem} />
			))}

			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<StripeCheckoutButton
				price={total}
				onClosed={() => clearItem(cartItems)}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

const mapDispatchToProp = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
});

React.createElement(CheckOutPage);
export default connect(mapStateToProps, mapDispatchToProp)(CheckOutPage);
