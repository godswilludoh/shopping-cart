import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles/Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='left'>HotDeals</div>
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
