import PropTypes from 'prop-types';

import MovieSceneList from "../movies_list/MovieSceneList";

function LandingPage({ movies }) {
    return (
        <>

            {movies.length === 0
                ?
                (<p>No hay resultados</p>)
                :
                (<MovieSceneList movies={movies} />)
            }

        </>
    );

}

export default LandingPage;