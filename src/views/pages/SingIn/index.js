import React, { useRef, useContext, useEffect } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import logo from "../../../assets/Logo.svg"

import { Container, Forms, Login, Fundo } from "./styles";
import * as Yup from "yup";
import getValidationErrors from "../../../utils/getValidationErrors";
import { AuthContext } from "../../../contexts/UserContext";


function SignIn() {
  const formRef = useRef(null);
  const {signIn} = useContext(AuthContext);
  

  const { signIn: login } = useContext(AuthContext);
  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        login: Yup.string().required("login obrigatório"),
        senha: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      formRef.current?.setErrors({});
      await signIn( data );
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };
  return (
    <Container>
      {" "}
      <Login>
        <img src ={logo} />
        <h1>React System</h1>
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <span>E-mail</span>
          <Input name="login" placeholder="Seu Email ou CPF" />
          <span>Senha</span>
          <Input
            name="senha"
            placeholder="Digite sua senha"
            type="password"
          />
        </Forms>
        <Button>LOGIN</Button>
        <div>
          Não possui uma conta ? <a href="/register">Registrar-se</a>
        </div>
      </Login>
      <Fundo></Fundo>
    </Container>
  );
}

export default SignIn;
