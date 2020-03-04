import React from 'react';

const Card = (props) => {
	const { id, name, email } = props.robot;
	return(
		<div className='tc grow br3 pa2 ma2 dib bw2 shadow-5 bg-light-green'>
			<img src={`https://robohash.org/${id}?size=200x200`} alt='kitty'/ >
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;