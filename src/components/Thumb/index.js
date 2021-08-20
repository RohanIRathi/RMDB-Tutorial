import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, name }) => (
	<div>
		{clickable ? (
			<Link to={`/${movieId}`}>
				<Image src={image} alt='movie-thumb' />
			</Link>
			) : (
			<Image src={image} alt='movie-thumb' />
		)}
		<h3>{name}</h3>
	</div>
);

Thumb.propTypes = {
	image: PropTypes.string,
	movieId: PropTypes.number,
	clickable: PropTypes.bool
}

export default Thumb;