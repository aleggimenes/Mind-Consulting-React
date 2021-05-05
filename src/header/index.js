import React from 'react';
import './style.css';
import logo from '../assets/Mind-Branco-copy.png';
import { Link } from 'react-router-dom';
export default function Header() {
  function clear() {
    localStorage.clear();
  }
  return (
    <div className="header">
      <Link to="/" onClick={() => clear()}>
        <img src={logo} alt="Logo" className="imagem" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login" onClick={() => clear()}>
              Logar
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={() => clear()}>
              Registrar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
