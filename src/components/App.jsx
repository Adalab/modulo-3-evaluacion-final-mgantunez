import { useState, useEffect } from 'react';
import Header from './Header';
import MovieSceneList from './movies_list/MovieSceneList';
import Form from './Form';
import Footer from './Footer';

import '../styles/App.scss';
import '../styles/_header.scss';
import '../styles/_movies_list.scss';
import '../styles/_form.scss';
import '../styles/_footer.scss';
import { Route } from 'react-router';
import LandingPage from './pages/LandingPage';
import MovieSceneDetail from './pages/MovieSceneDetail';

function App() {

  const [movies, setMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {

    let url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=50';

    if (filterMovie) {
      url += `&movie=${encodeURIComponent(filterMovie)}`;
    }
    if (filterYear) {
      url += `&year=${encodeURIComponent(filterYear)}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(dataJson => {
        setMovies(dataJson);
      });
  },
    [filterMovie, filterYear]);


  // Filtro por nombre

  const handleInputFilterMovie = (ev) => {
    ev.preventDefault();
    setFilterMovie(ev.target.value.toLocaleLowerCase());

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

      <Header />

      <main>

        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="detail/:name" element={<MovieSceneDetail />}></Route>
          <Route path="*" element={<p>Error 404</p>}></Route>
        </Routes>

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

      <Footer />

    </div>
  )
}

export default App;
