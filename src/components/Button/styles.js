import styled from "styled-components";
import { shade } from "polished";


export const Container = styled.button`
  background-color: #53C1DE;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  color: #3A3737;
  width: 70%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${shade(0.1, `#E1EBED`)};
  }
`;
