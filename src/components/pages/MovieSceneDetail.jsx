

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

            <ul>
                <li className="detail__poster">
                    <img src={movie.poster} alt={`Cartel de ${movie.movie}`} />
                </li>
                <li className="detail__sentence">{movie.full_line}</li>
                <li className="detail__director">{movie.director}</li>
                <li className="detail__audio">{movie.audio}</li>
            </ul>


            <Link to="/" className="detail__returnBtn">
                Volver a la home
            </Link>
        </section >
    );

}

export default MovieSceneDetail;