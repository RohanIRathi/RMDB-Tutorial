import React from "react";

// Configuration
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Images
import NoImage from "../images/no_image.jpg";

const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
	console.log(state);

	if (error) return <div> Something Went Wrong... </div>;

	return (
		<>
			{!searchTerm && state.results ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			{state.results ? (
				<Grid header={searchTerm ? "Search Result(s)" : "Popular Movies"}>
					{state.results.map((movie) => (
						<Thumb
							key={movie.id}
							clickable
							image={
								movie.poster_path
									? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
									: NoImage
							}
							movieId={movie.id}
							name={movie.original_title}
						/>
					))}
				</Grid>
			) : null}
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				<Button
					text="Load More"
					callback={() => setIsLoadingMore(true)}
				/>
			)}
		</>
	);
};

export default Home;
