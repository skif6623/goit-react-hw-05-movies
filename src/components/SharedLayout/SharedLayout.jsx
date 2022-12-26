import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ButtonLink, Navigate, Header, Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigate>
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/movies">Movies</ButtonLink>
          </Navigate>
        </Container>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
