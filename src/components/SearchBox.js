import React from 'react';

const SearchBox = (props) => {
	return(
		<div className='pa2'>
			<input
				type='search'
				className='pa1 ba b--gold bg-light-blue'
				placeholder='Search Robot'
				onChange={props.searchChange}
			/>
		</div>
	);
};

export default SearchBox;