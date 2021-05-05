import React, { useEffect } from 'react';
import './style.css';
import Input from '../components/Input/index';
import Button from '../components/Button';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const history = useHistory();
  const [usuario, setUsuario] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [level, setLevel] = React.useState('');
  useEffect(() => {
    (async () => {
      const token = await localStorage?.getItem?.('token');
      const user = JSON?.parse?.(await localStorage?.getItem?.('user'));
    })();
  }, []);
  function linkUser() {
    history.push('/dashboardUser');
  }
  function linkAdm() {
    history.push('/dashboardAdm');
  }
  async function logar() {
    try {
      const response = await api.post('/auth/login', {
        usuario,
        password,
      });
      const { user, token } = response.data;
      await localStorage.setItem('token', token);
      await localStorage.setItem('user', JSON.stringify(user));
      setLevel(user.level);
      if (user.level === 1) {
        linkUser();
      } else {
        linkAdm();
      }
    } catch (response) {
      console.log(response);
    }
  }
  return (
    <div className="login">
      <div className="container-1"></div>
      <div className="container-2">
        <h1>Preencha os campos</h1>
        <Input
          label="E-mail"
          type="text"
          name="email"
          placeholder="exemplo@gmail.com"
          onChange={({ target }) => setUsuario(target.value)}
        />
        <Input
          label="CPF"
          type="text"
          name="cpf"
          placeholder="999.999.999-99"
          onChangeText={({ target }) => setUsuario(target.value)}
        />
        <Input
          label="Senha"
          type="text"
          name="senha"
          placeholder="*******"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <Button
          onClick={() => {
            logar();
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
