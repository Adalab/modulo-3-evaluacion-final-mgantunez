import { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

import '../styles/App.scss';
import '../styles/_header.scss';
import '../styles/_form.scss';
import '../styles/_movies_list.scss';
import '../styles/_footer.scss';
import '../styles/_movie_scene_detail.scss';
import LandingPage from './pages/LandingPage';
import MovieSceneDetail from './pages/MovieSceneDetail';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router';

function App() {

  const location = useLocation();
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
        localStorage.setItem("movies", JSON.stringify(dataJson));
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


  // Función para usar en router
  const findMovie = (movieName) => {
    return movies.find((movie) => movie.movie.toLowerCase() === movieName.toLowerCase());
  }

  return (
    <div className="page">

      <Header />

      <main>

        {location.pathname === '/' && (
          <Form
            handleInputFilterMovie={handleInputFilterMovie}
            filterMovie={filterMovie}
            filterYear={filterYear}
            handleSelectFilterYear={handleSelectFilterYear}
            finalYear={finalYear}

          />
        )}

        <Routes>
          <Route index element={<LandingPage movies={filteredMovies} filterMovie={filterMovie} />}></Route>
          <Route path="detail/:movie" element={<MovieSceneDetail findMovie={findMovie} />}></Route>
          <Route path="*" element={<p>Error 404 - Página no encontrada</p>}></Route>
        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App;
