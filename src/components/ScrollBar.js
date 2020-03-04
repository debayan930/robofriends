import React from 'react';
import './ScrollBar.css';

const ScrollBar = (props) => {
	return(
		<div className='scrollbar'>
			{props.children}
		</div>
	);
};

export default ScrollBar;