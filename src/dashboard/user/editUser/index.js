import React, { useState, useEffect } from 'react';
import './style.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import api from '../../../services/api';
import { useHistory } from 'react-router-dom';
export default function EditUser() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const history = useHistory();

  function validaEmail(email) {
    const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }
  function validaSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    return senhaRegex.test(String(senha));
  }

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem('token');
      const user = JSON.parse(await localStorage.getItem('user'));
      setUser(user);
      setName(user.name);
      setCpf(user.cpf);
      setEmail(user.email);
      setPassword(user.password);
    })();
  }, []);
  function linkVoltar() {
    if (user.level === 1) {
      history.push('/dashboardUser');
    } else {
      history.push('/dashboardAdm');
    }
  }
  async function update() {
    try {
      const id = user._id;
      const response = await api.put('/user/update/' + id, {
        name,
        cpf,
        email,
        password,
      });
      const { usuario } = response.data;
      console.log(user);
      await localStorage.setItem('user', JSON.stringify(usuario));
      console.log(user);
      window.alert('Alterado com sucesso');
    } catch (response) {}
  }
  return (
    <div className="edit">
      <div className="introducao-edit">
        <h1>Editar Usuário</h1>
      </div>
      <div className="quebra-edit">Aqui você poderá editar seus dados</div>
      <div className="animeLeft">
        <div className="container-edit">
          <div className="controler-div-edit">
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Shaolin Matador de Porco"
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              label="E-mail"
              type="text"
              name="email"
              placeholder="exemplo@gmail.com"
              onBlur={() =>
                validaEmail(email) === true
                  ? console.log('')
                  : window.alert('Necessários Caracteres')
              }
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              label="CPF"
              type="text"
              name="cpf"
              placeholder="999.999.999-99"
              onChange={({ target }) => setCpf(target.value)}
            />
            <Input
              label="Senha"
              type="text"
              name="senha"
              placeholder="*******"
              type="password"
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
              <Button onClick={() => linkVoltar()}>Voltar</Button>
              <Button onClick={() => update()}>Salvar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
