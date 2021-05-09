export const addItemToCart = (cartItems, cartItemToAdd) => {
	const exisitingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (exisitingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
  console.log("Cart Items: ")
	console.log(cartItems);
  console.log("Cart Items To Add: ")
	console.log({ ...cartItemToAdd, quantity: 1 });
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
