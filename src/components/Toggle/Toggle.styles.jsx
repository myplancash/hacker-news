
import styled, {css} from 'styled-components';

const active = css`
  background-color: '#333';
  color: '#fff';
  border: solid 1px #0080FF;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  padding: 1rem;
`

const normal = css`
  background-color: '#ccc';
  color: '#333';
  border: solid 1px #ccc;
  padding: 1rem;
`

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;


export const ToggleOption = styled.div`
  ${({ selected }) => (selected ? active : normal)};
  cursor: pointer;
`;

export const Option = styled.span`
  /* padding: 0.188rem 2.438rem 0 2.5rem; */
  border-radius: 2px;
`