import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #e4f5eb;
  border: 1px solid rgba(231, 231, 231, 0.7);
  box-shadow: 30px 30px 70px rgba(99, 98, 98, 0.06);
`;

export const ButtonLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  margin-right: 30px;

  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 19.8294px;
  line-height: 15px;

  color: white;
  background-color: #45b871;
  box-shadow: 0px 7.93174px 79.3174px rgba(9, 188, 77, 0.2);
  border-radius: 4.95734px;
`;
