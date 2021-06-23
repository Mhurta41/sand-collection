import React from 'react';
import { Link } from 'react-router-dom';
import './SandCollection.css';
const SandCollection = () => {
	return (
		<div className='cards-container'>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Destination</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Destination</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Destination</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Destination</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
		</div>
	);
};

export default SandCollection;
