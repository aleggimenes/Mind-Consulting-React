import React, { useState, useEffect } from 'react';
import './style.css';
import Input from '../components/Input/index';
import Button from '../components/Button';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
export const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function linkLogar() {
    history.push('/login');
  }
  function validaEmail(email) {
    const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }
  function validaSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    return senhaRegex.test(String(senha));
  }
  function logar() {
    return new Promise(async (resolve, rejected) => {
      try {
        const response = await api.post('/auth/register', {
          name,
          cpf,
          email,
          password,
          level: 1,
        });
        console.log(response);
        window.alert('Cadastro realizado com sucesso');
        return resolve(response.data.data);
      } catch (response) {
        console.log(response);
      }
    });
  }
  return (
    <div className="register">
      <div className="container-register-1"></div>
      <div className="container-register-2">
        <h1>Nova Conta</h1>
        <Input
          label="Nome"
          type="text"
          name="Nome"
          placeholder="Flavin Do Pineu"
          onChange={({ target }) => setName(target.value)}
        ></Input>
        <Input
          label="E-mail"
          type="text"
          name="email"
          onBlur={() =>
            validaEmail(email) === true
              ? console.log('')
              : window.alert('Necessários Caracteres')
          }
          placeholder="exemplo@gmail.com"
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          label="CPF"
          type="cpf"
          name="cpf"
          placeholder="999.999.999-99"
          onChange={({ target }) => setCpf(target.value)}
        />
        <Input
          label="Senha"
          type="password"
          name="senha"
          placeholder="*****"
          onBlur={() =>
            validaSenha(password) === true
              ? console.log('')
              : window.alert(
                  'caracteres maiúsculos e minúsculos, caracteres especiais, números e 8 a 20 caracteres',
                )
          }
          onChange={({ target }) => setPassword(target.value)}
        />
        <div className="posicao-botao">
          <Button
            onClick={() => {
              linkLogar();
            }}
          >
            Ir para logar
          </Button>
          <Button
            onClick={() => {
              logar();
            }}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};
