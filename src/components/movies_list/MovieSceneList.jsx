import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';
import notFoundImage from '../../images/notFound.jpeg';

function MovieSceneList({ movies, filterMovie }) {

    const filteredMovies = movies.filter((oneMovie) =>
        oneMovie.movie.toLowerCase().includes(filterMovie.toLowerCase())
    );

    return (
        <section className="movies">

            {/* Si no hay películas que coincidan con el filtro */}

            {filteredMovies.length === 0

                ?

                (
                    <>
                        <p className="movies__textNotFound">
                            No hay ninguna película que coincida con la palabra {filterMovie}
                        </p>
                        <img className="movies__imgNotFound" src={notFoundImage} alt="Imagen de película no encontrada" />
                    </>
                )

                :

                (
                    <ul className="movies__list">
                        {filteredMovies.map((oneMovie) => (
                            <li key={oneMovie.audio} className="movies__item">
                                <MovieSceneItem oneMovie={oneMovie} />
                            </li>
                        ))}
                    </ul>
                )}
        </section>
    );
}

MovieSceneList.propTypes = {
    movies: PropTypes.array.isRequired,
    filterMovie: PropTypes.string.isRequired
};

export default MovieSceneList;
