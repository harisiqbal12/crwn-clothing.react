import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdowm from '../cart-dropdown/cart-dropdown.jsx';
import { selectCurrentUser } from '../../redux/user/user.selector.js';
import { selectHiddenCart } from '../../redux/cart/cart.selectors.js';
import {
	HeaderContainer,
	LogoContainer,
	OptionContainer,
	OptionLink,
	OptionDiv,
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{currentUser ? (
					<OptionDiv
						onClick={e => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</OptionDiv>
				) : (
					<OptionLink className="option" to="/signin">
						SIGN IN
					</OptionLink>
				)}
				<CartIcon />
			</OptionContainer>
			{hidden ? null : <CartDropdowm />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHiddenCart,
});

export default connect(mapStateToProps)(Header);
