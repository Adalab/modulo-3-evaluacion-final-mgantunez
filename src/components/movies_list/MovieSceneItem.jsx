import PropTypes from 'prop-types';

function MovieSceneItem({ oneMovie }) {


    return (
        <>
            < a href={oneMovie.poster} target="_blank" rel="noopener noreferrer" >
                <img className="movies__img" src={oneMovie.poster} alt={`Cartel de ${oneMovie.movie}`} />
            </a >
            <p className="movies__title">{oneMovie.movie}</p>
            <p className="movies__sentence">{oneMovie.full_line}</p>
            <p className="movies__year">{oneMovie.year}</p>

        </>
    );

}

MovieSceneItem.propTypes = {
    oneMovie: PropTypes.object
}

export default MovieSceneItem;