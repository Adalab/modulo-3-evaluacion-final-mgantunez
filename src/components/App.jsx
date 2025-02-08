import '../styles/App.scss';
import '../styles/_header.scss';
import { useState } from 'react';

function App() {
  return (
    <div className="page">

      <header className="header">
        <img className="header__image" src="/portada_header.png" alt="Owen Wilson WOW" />
        <h1 className="header__title">The Owen Wilson WOW web</h1>
      </header>

      <form>

        <input
          className="header__search"
          autoComplete="off"
          type="search"
          name="search"
          placeholder="Filtrar por película"
          value=""
        />

        <select className="header__search" name="searchYear">
          <option value="">Filtrar por año</option>
          {Array.from({ length: 2025 - 1990 + 1 }, (_, i) => {
            const year = 1990 + i;
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>

      </form>

      <main>

        <ul className="movies__list">

          <li className="movies__item">

            <img src="#" alt="poster" />
            <p>Película</p>
            <p>Frase completa</p>
            <p>Año</p>

          </li>

          <li className="movies__item">

            <img src="#" alt="poster" />
            <p>Película</p>
            <p>Frase completa</p>
            <p>Año</p>

          </li>

          <li className="movies__item">

            <img src="#" alt="poster" />
            <p>Película</p>
            <p>Frase completa</p>
            <p>Año</p>

          </li>

        </ul>

      </main>
    </div>
  )
}

export default App;
