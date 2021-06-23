import React from 'react';
import { Link } from 'react-router-dom';
import './SandCollection.css';
const SandCollection = () => {
	return (
		<div className='cards-container'>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Myrtle Beach, South Carolina</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>New Orleans, Louisiana</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Cozumel, Mexico</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Montevideo, Nicaragua</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Lima, Peru</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Miami, Florida</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Carillo, Costa Rica</h1>
					<img
						className='sand-image'
						src='https://i.imgur.com/I1yc66c.jpeg'
						alt='sample'
					/>
				</Link>
			</div>
			<div className='card'>
				<Link to='/destination' className='card-link'>
					<h1>Punta Cana, Dominican Republic</h1>
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
