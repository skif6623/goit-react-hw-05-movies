import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 90px) / 4);
`;
