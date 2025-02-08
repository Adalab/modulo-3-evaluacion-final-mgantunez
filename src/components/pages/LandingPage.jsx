import PropTypes from 'prop-types';

import MovieSceneList from "../movies_list/MovieSceneList";

function LandingPage({ movies, filterMovie }) {
    return (
        <>


            <MovieSceneList movies={movies} filterMovie={filterMovie} />

        </>
    );

}

LandingPage.propTypes = {
    movies: PropTypes.array.isRequired,
    filterMovie: PropTypes.string.isRequired
};

export default LandingPage;