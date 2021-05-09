import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

// export const selectCartItemsCount = cartItems =>
// 	createSelector([selectCartItems], cartItems =>
// 		cartItems.reduce((accumalatedQuantity, cartItem) => {
// 			console.log(cartItem);
// 			return accumalatedQuantity + cartItem.quantity;
// 		}, 0)
// 	);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce(
			(accumalatedQuantity, cartItem) =>
				accumalatedQuantity + cartItem.quantity,
			0
		)
);

export const selectHiddenCart = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(accquantity, cartItem) => accquantity + cartItem.quantity * cartItem.price,
		0
	)
);
