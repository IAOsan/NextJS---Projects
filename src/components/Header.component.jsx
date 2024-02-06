import React from 'react';
import { Navbar, NavbarLogo, Nav, NavItem, NavLink } from './common';

function Header() {
	return (
		<header className='bg-dark'>
			<div className='container'>
				<Navbar>
					<NavbarLogo
						href='/'
						className='c-primary-300'
					>
						NextEvents
					</NavbarLogo>
					<Nav align='right'>
						<NavItem>
							<NavLink
								className='c-primary-300'
								href='/events'
							>
								All Events
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		</header>
	);
}

export default Header;
