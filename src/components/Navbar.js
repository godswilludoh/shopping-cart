import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles/Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<h2>HotDeals</h2>
			<div className='right'>
				<ShoppingCartIcon />
				<div className='amount-container'>
					<p className='total-amount'>5</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
