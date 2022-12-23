import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
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
      </Routes>
    </div>
  );
};
