import React from 'react';
const SparklingStar = (context) => {
	const { delayTime, duration } = context;

	return (
		<div
			className="four-pointed-star"
			style={ { animation:
				`sparkle ${ duration }s ${ delayTime }s infinite ease-in-out` } }
		/>
	);
};

export default SparklingStar;
