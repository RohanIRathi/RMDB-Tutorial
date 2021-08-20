import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg, Login } from './Header.styles';

// Context
import { Context } from '../../context';

const Header = () => {
	const [user] = useContext(Context);
	console.log(user);

	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<LogoImg src={RMDBLogo} alt="rmdb-logo" />
				</Link>
				{user ? (
					<Login>Logged in as: {user.username}</Login>
					) : (
						<Login><Link to='/login'>Log in</Link></Login>
				)}
				<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
			</Content>
		</Wrapper>
	)
};

export default Header;