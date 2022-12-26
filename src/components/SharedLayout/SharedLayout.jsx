import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './SharedLayout.styled';
import { ButtonLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <ButtonLink to="/">Home</ButtonLink>
          <ButtonLink to="/movies">Movies</ButtonLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
