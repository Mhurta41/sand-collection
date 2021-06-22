import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	return (
		<div className='navbar'>
			<nav>
				<div className='nav-div'>
					<ul>
						<li className='navbar-link'>
							<Link to='/home'>
								<a href='/'>
									<img
										className='logo'
										src='https://i.imgur.com/3wLo3gu.png'
										alt='personal-logo'
									/>
								</a>
							</Link>
						</li>
						<li className='navbar-link'>
							<Link to='/home'>
								<h2>Home</h2>
							</Link>
						</li>
						<li className='navbar-link'>
							<h2>|</h2>
						</li>
						<li className='navbar-link'>
							<Link to='/collection'>
								<h2>Entire Sand Collection</h2>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
