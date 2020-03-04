import React from 'react';
import './Card.css';

const Card = (props) => {
	const { id, name, email } = props.robot;
	return(
		<div className='card tc grow br4 pa3 ma2 dib bw2 shadow-5 bg-light-green'>
			<img src={`https://robohash.org/${id}?set=set4&size=175x175`} alt='kitty'/ >
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;