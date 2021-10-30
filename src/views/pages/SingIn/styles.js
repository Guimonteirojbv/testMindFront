import styled from 'styled-components';
import {Form} from "@unform/web";
import background from "../../../assets/imagembg.png";

export const Container = styled.div`
  position: fixed;
  display:flex;
  align-items: center;
  justify-content: center;
  top:0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: #E1EBED;
`;

export const Fundo = styled.div `
  display: flex;
  justify-content: flex-start;
  width: 70%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  height: 600px;
  margin-top: 16px;
  letter-spacing: .1em;
  color: #3A3737;
  >a {
    text-decoration: none;
    color: #0000FF;
    letter-spacing: 0px;
    
  }
  h1 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  
  
`;

export const Forms = styled(Form)`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin-top: 0px;
  align-self: center;

  >span {
    display: flex;
    width: 70%;
    justify-content: flex-start;
    margin-top: 32px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  `;