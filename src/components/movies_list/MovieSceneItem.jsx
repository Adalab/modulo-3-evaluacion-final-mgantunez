import { Link } from 'react-router';

import PropTypes from 'prop-types';

function MovieSceneItem({ oneMovie }) {

    return (

        <Link to={"detail/" + oneMovie.movie} className="movies__link">
            <>
                <img className="movies__img" src={oneMovie.poster} alt={`Cartel de ${oneMovie.movie}`} />
                <p className="movies__title">{oneMovie.movie}</p>
                <p className="movies__sentence">{oneMovie.full_line}</p>
                <p className="movies__year">{oneMovie.year}</p>

                <button className="movies__infoBtn">
                    <i className="fas fa-info-circle"></i>
                    Ver detalles
                </button>

            </>

        </Link>
    );
}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.shape({
        movie: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        full_line: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    }).isRequired,
}

export default MovieSceneItem;