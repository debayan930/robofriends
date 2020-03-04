import React from 'react';
import Card from './Card';

const CardList = (props) => {
	return(
		<div>
			{
				props.robots.map((user, id) => {
					return(
						<Card
							key={id}
							robot={user}
						/>
					)
				})
			}
		</div>
	);
};

export default CardList;