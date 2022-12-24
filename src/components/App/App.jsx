import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast/Cast';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<div>з сирочком</div>} />
        </Route>
      </Routes>
    </div>
  );
};
