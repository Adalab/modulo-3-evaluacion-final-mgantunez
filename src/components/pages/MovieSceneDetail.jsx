import { useParams, Link } from 'react-router';

import PropTypes from 'prop-types';

function MovieSceneDetail({ findMovie }) {

    const params = useParams();

    let movie = findMovie(params.movie);

    if (!movie) {
        const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
        movie = storedMovies.find(m => m.movie === params.movie);
    }

    if (!movie) {
        return (
            <section className="detail">
                <h2 className="detail__title">La escena que buscas no existe</h2>
                <Link to="/" className="detail__returnBtn">
                    Volver a la home
                </Link>
            </section>);
    }

    return (
        <section className="detail">
            <h2 className="detail__title"> {movie.movie}</h2>

            <div className="detail__movie">

                <div className="detail__poster">
                    <img className="detail__imgPoster" src={movie.poster} alt={`Cartel de ${movie.movie}`} />
                </div>

                <div className="detail__info">

                    <div>
                        <i className="detail__icon fas fa-quote-left"></i>
                        <p className="detail__introText">Frase:</p>
                        <p className="detail__text">{movie.full_line}</p>
                    </div>

                    <div className="detail__infoLine">
                        <i className="detail__icon fas fa-user"></i>
                        <p className="detail__introText">Director:</p>
                        <p className="detail__text">{movie.director}</p>

                    </div>

                    <i className="detail__icon fas fa-volume-up"></i>

                    <audio controls className="detail__audio">

                        <source src={movie.audio} type="audio/mp3" />

                    </audio>

                </div>
            </div>

            <Link to="/" className="detail__returnBtn">
                Volver a la home
            </Link>

        </section >
    );

}

MovieSceneDetail.propTypes = {
    findMovie: PropTypes.object
}

export default MovieSceneDetail;