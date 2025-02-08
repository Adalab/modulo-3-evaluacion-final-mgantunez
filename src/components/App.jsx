import '../styles/App.scss';
import '../styles/_header.scss';
import '../styles/_movies_list.scss';
import '../styles/_form.scss';
import { useState } from 'react';

function App() {
  return (
    <div className="page">

      <header className="header">
        <img className="header__image" src="/portada_header.png" alt="Owen Wilson WOW" />
        <h1 className="header__title">The Owen Wilson WOW web</h1>
      </header>

      <main>

        <form>

          <input
            className="form__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar por película"
            value=""
          />

          <select className="form__search" name="searchYear">
            <option value="">Filtrar por año</option>
            {Array.from({ length: 2025 - 1990 + 1 }, (_, i) => {
              const year = 1990 + i;
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>

        </form>

        <ul className="movies__list">

          <li className="movies__item">

            <img className="movies__img" src="#" alt="poster" />
            <p className="movies__title">Película</p>
            <p className="movies__sentence">Frase completa</p>
            <p className="movies__year">Año</p>

          </li>

          <li className="movies__item">

            <img className="movies__img" src="#" alt="poster" />
            <p className="movies__title">Película</p>
            <p className="movies__sentence">Frase completa</p>
            <p className="movies__year">Año</p>

          </li>

          <li className="movies__item">

            <img className="movies__img" src="#" alt="poster" />
            <p className="movies__title">Película</p>
            <p className="movies__sentence">Frase completa</p>
            <p className="movies__year">Año</p>

          </li>

        </ul>

      </main>
    </div>
  )
}

export default App;
