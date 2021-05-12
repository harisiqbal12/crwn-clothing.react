import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, onClosed }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IqGyGAk0qc7Zny2u2YzjZGs03HtFMzf3YL5LoVbrVYcwjdhTVggBD87FlA0SpZFpiQ74I7xIu9Vwue9NZiROskg00SOxxmt95';
	const ontoken = token => {
		console.log(token);
		alert('Payment Successfull');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={ontoken}
			stripeKey={publishableKey}
			closed={onClosed}
		/>
	);
};

export default StripeCheckoutButton;
