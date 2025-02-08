

import { useParams, Link } from 'react-router';

function MovieSceneDetail({ findMovie }) {

    const params = useParams();

    const movie = findMovie(params.movie);

    if (!movie) {
        return <p>Película no encontrada</p>;
    }

    return (
        <section className="detail">
            <h2 className="detail__title"> {movie.movie}</h2>

            <div className="detail__movie">

                <div className="detail__poster">
                    <img className="detail__imgPoster" src={movie.poster} alt={`Cartel de ${movie.movie}`} />
                </div>

                <div className="detail__info">

                    <p className="detail__introText">Frase:</p>
                    <p className="detail__text"> {movie.full_line}</p>
                    <p className="detail__introText">Director:</p>
                    <p className="detail__text">{movie.director}</p>


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

export default MovieSceneDetail;