import { useState, useEffect } from 'react';
import MoviesList from './movies_list/MoviesList';
import Form from './Form';

import '../styles/App.scss';
import '../styles/_header.scss';
import '../styles/_movies_list.scss';
import '../styles/_form.scss';
import '../styles/_footer.scss';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then(response => response.json())
      .then(dataJson => {
        setMovies(dataJson);
      });
  }, []);



  return (
    <div className="page">

      <header className="header">
        <img className="header__image" src="/portada_header.png" alt="Owen Wilson WOW" />
        <h1 className="header__title">The Owen Wilson WOW web</h1>
      </header>

      <main>

        <Form />

        {movies.length === 0
          ?
          <p>No hay resultados</p>
          :
          <MoviesList movies={movies} />
        }

      </main>

      <footer className="footer">

        <p className="footer__text">&copy; 2025 The Owen Wilson WOW web. Todos los derechos reservados.</p>

      </footer>
    </div>
  )
}

export default App;
