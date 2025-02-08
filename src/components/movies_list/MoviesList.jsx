import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';

function MoviesList({ movies }) {
    return (

        <ul className="movies__list">

            {movies.map((oneMovie) =>

                <li key={oneMovie.audio} className="movies__item">

                    <MoviesItem oneMovie={oneMovie} />

                </li>

            )}

        </ul>)
        ;

}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList;