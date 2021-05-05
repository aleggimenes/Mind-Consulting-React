import React, { useState, useEffect } from 'react';
import './style.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
export default function DashBoardAdm() {
  const [user, setuser] = useState('');

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem('token');
      const user = JSON?.parse?.(await localStorage.getItem('user'));
      setuser(user);
    })();
  }, []);
  function clear() {
    localStorage.clear();
  }
  console.log(user);
  return (
    <div className="dashboard">
      <div className="introducao-dashboard">
        <h1>BEM-VINDO ADMINISTRADOR {user?.name}</h1>
      </div>
      <div className="quebra-dashboard">
        Aqui você poderá visualizar seus dados
      </div>
      <div className="animeLeft">
        <div className="container-dashboard">
          <Input label="Nome" type="text" name="nome" value={user?.name} />
          <Input label="E-mail" type="text" name="email" value={user?.email} />
          <Input label="CPF" type="text" name="cpf" value={user?.cpf} />
          <div className="posicao-botao">
            <Link to="/editarUser">
              <Button>Alterar Conta</Button>
            </Link>
            <Link to="/list">
              <Button>Listar</Button>
            </Link>
            <Link to="/login">
              <Button onClick={() => clear()}>Desconectar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
