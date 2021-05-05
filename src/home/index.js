import React from 'react';
import './style.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="animeLeft">
      <div className="home">
        <div className="container-home">
          <div className="introducao-home">
            <h1>Bem-Vindo</h1>
          </div>
        </div>
        <div className="quebra">Seja Bem-Vindo ao site da Mind Consulting</div>
        <div className="container-2-home">
          <div className="conjunto">
            <div className="imagem-edit"></div>
            <div className="conjunto-2">
              <h2>Mind</h2>
              <div className="descricao">
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </div>
            </div>
          </div>
          <div className="conjunto">
            <div className="imagem-edit"></div>
            <div className="conjunto-2">
              <h2>Mind</h2>
              <div className="descricao">
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </div>
            </div>
          </div>
          <div className="conjunto">
            <div className="imagem-edit"></div>
            <div className="conjunto-2">
              <h2>Mind</h2>
              <div className="descricao">
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </div>
            </div>
          </div>
        </div>
        <Link to="/login">
          <Button>Logar</Button>
        </Link>
      </div>
    </div>
  );
}
