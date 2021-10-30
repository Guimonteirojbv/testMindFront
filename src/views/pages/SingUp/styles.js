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

  >div {
    display: inline-block;
    margin-left: -70px;
    padding-top: 20px;
  
  }

  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 30px !important;
    margin-right: 70px !important;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 30px !important;
    margin-right: 30px !important;
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



