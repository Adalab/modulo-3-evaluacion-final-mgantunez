import { Link } from 'react-router';

import PropTypes from 'prop-types';

function MovieSceneItem({ oneMovie }) {

    return (

        <Link to={"detail/" + oneMovie.movie}>
            <>
                <img className="movies__img" src={oneMovie.poster} alt={`Cartel de ${oneMovie.movie}`} />
                <p className="movies__title">{oneMovie.movie}</p>
                <p className="movies__sentence">{oneMovie.full_line}</p>
                <p className="movies__year">{oneMovie.year}</p>

            </>

        </Link>
    );
}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MovieSceneItem;