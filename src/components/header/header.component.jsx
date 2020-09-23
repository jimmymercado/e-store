import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';


import './header.styles.scss';

const HeaderMenu = ({currentUser, hidden}) => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo'></Logo>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			{
				currentUser ?
				<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link> 
			}

			<CartIcon/> 
		</div>
		{
			hidden?
			'':
			<CartDropDown/>
		}
		
	</div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
	currentUser:currentUser,
	hidden:hidden
});

export default connect(mapStateToProps)(HeaderMenu); 