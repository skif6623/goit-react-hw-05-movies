import { getTrending } from 'tmdbAPI';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from 'components/Home/Home';
export const App = () => {
  // useEffect(() => {
  //   const movies = getTrending();
  //   console.log(movies);
  // });

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
      </Routes>
    </div>
  );
};
