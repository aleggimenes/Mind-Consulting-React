import React, { useState, useEffect } from 'react';
import './style.css';
import Edit from '../../../assets/botao-editar.png';
import api from '../../../services/api';
import Button from '../../../components/Button/index';
import { Link, useHistory } from 'react-router-dom';
export default function List() {
  const history = useHistory();
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const response = await api.get('/user/usuarios');
      await localStorage.setItem('users', JSON.stringify(response.data.users));
      console.log(response.data.users);
      setUsers(JSON.parse(await localStorage.getItem('users')));
    })();
  }, []);
  function linkEditar() {
    history.push('/editUserId');
  }
  function refreshPage() {
    window.location.reload(false);
  }
  function PageEdit() {}

  async function desativar(userId) {
    try {
      const response = await api.put(`/user/update/AtivarUsuario/${userId}`, {
        level: 0,
      });
      console.log(response.data.usuario.level);
      refreshPage();
    } catch (err) {
      console.log(err);
      window.alert('Não foi possível');
    }
  }
  async function ativar(usuarioId) {
    try {
      const response = await api.put(
        `/user/update/DesativarUsuario/${usuarioId}`,
        {
          level: 1,
        },
      );
      refreshPage();
    } catch (err) {
      console.log(err);
      window.alert('Não foi possível');
    }
  }
  async function update(usuarioId) {
    try {
      const response = await api.get(`/user/${usuarioId}`);
      await localStorage.setItem(
        'usuario',
        JSON.stringify(response.data.usuario),
      );
      PageEdit();
      linkEditar();
      console.log(response.data.usuario);
    } catch (err) {
      console.log(err);
      window.alert('Não foi possível');
    }
  }

  return (
    <div className="list">
      <section className="introducao">
        <h1>Lista de Usuários</h1>
      </section>
      <div className="quebra">
        Aqui o Gerente pode consultar e editar os usuários
      </div>
      <div className="tabela">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Editar</th>
              <th>Desativar/Ativar</th>
            </tr>
          </thead>
          <tbody>
            {users?.map?.((user) => (
              <tr key={user._id}>
                <td>{user?.name}</td>
                <td>
                  <Button onClick={() => update(user._id)}>Editar</Button>
                </td>
                <td>
                  {user.level === 1 ? (
                    <Button className="botao" onClick={() => ativar(user._id)}>
                      Desativar
                    </Button>
                  ) : (
                    <Button
                      className="botao"
                      onClick={() => desativar(user._id)}
                    >
                      Ativar
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
