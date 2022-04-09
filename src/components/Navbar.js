import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles/Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='left'>HotDeals</div>
			<div className='right'>
				<ShoppingCartIcon />
			</div>
		</div>
	);
};

export default Navbar;
