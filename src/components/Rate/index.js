import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, RateButton } from './Rate.styles';

const Rate = ({ callback }) => {
	const [value, setValue] = useState(1);
	return (
		<Wrapper>
			<div className="title">Rate Movie</div>
			<input
			type="range"
			min="1"
			max="10"
			step="0.5"
			value={value}
			onChange={e => setValue(e.currentTarget.value)}
			/>
			<div className="rating">{value}</div>
			<RateButton href="" onClick={() => callback(value)}>Rate</RateButton>
		</Wrapper>
	)
};

Rate.propTypes = {
	callback: PropTypes.func
}

export default Rate;