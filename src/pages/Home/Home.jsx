import { TrendingMovieList } from 'components/TrendingList/TrendingMovieList';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { Title, Main } from './Home.styled';

export const Home = () => {
  return (
    <Main>
      <Container>
        <Title>Trending today</Title>
        <TrendingMovieList />
      </Container>
    </Main>
  );
};
