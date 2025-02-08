import { useState, useEffect } from 'react';
import MovieSceneList from './movies_list/MovieSceneList';
import Form from './Form';

import '../styles/App.scss';
import '../styles/_header.scss';
import '../styles/_movies_list.scss';
import '../styles/_form.scss';
import '../styles/_footer.scss';

function App() {

  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then(response => response.json())
      .then(dataJson => {
        setMovies(dataJson);
      });
  }, []);


  // Filtro por nombre

  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value);

  }

  // Filtro por año

  const handleSelectFilterYear = (ev) => {
    setFilterYear(ev.target.value);
  };

  // Filtro por nombre y año

  const filteredMovies = movies.filter(movie => {

    const searchMovie = movie.movie.toLowerCase().includes(filterMovie.toLocaleLowerCase());
    const searchYear = filterYear ? movie.year === parseInt(filterYear) : true;
    return searchMovie && searchYear;
  });

  // Obtener año de película con .map 
  const finalYear = [...new Set(movies.map(movie => movie.year))];

  return (
    <div className="page">

      <header className="header">
        <img className="header__image" src="/portada_header.png" alt="Owen Wilson WOW" />
        <h1 className="header__title">The Owen Wilson WOW web</h1>
      </header>

      <main>

        <Form
          handleInputFilterMovie={handleInputFilterMovie}
          filterMovie={filterMovie}
          filterYear={filterYear}
          handleSelectFilterYear={handleSelectFilterYear}
          finalYear={finalYear}

        />

        {movies.length === 0
          ?
          (<p>No hay resultados</p>)
          :
          (<MovieSceneList movies={filteredMovies} />)
        }

      </main>

      <footer className="footer">

        <p className="footer__text">&copy; 2025 The Owen Wilson WOW web. Todos los derechos reservados.</p>

      </footer>
    </div>
  )
}

export default App;
