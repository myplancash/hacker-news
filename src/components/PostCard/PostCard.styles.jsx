import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = styled.section` 
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 16px;
  border: 0.5px solid #070606;
  cursor: pointer;
  font-family: 'Nunito',
  sans-serif;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #070606;
`;

export const ClockIcon = styled(FontAwesomeIcon)` 
margin-left: 0.5rem;
transition: transform 0.3s ease-in-out;
color: #999;
margin-right: 0.5rem;
font-weight: lighter;
`;

export const CardTitle = styled.section `
  width: 80%;
  font-weight: 400;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.4;
`;

export const CardLikes = styled.section` 
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 0;
  margin-left: 0.4rem;
  background-color: #e9e9e9;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;