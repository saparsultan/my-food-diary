import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  let activeStyle = {
    backgroundColor: "#fff",
  };

  return (
    <header className="header">
      <div className="logo">
        Sultan Syzdykov
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink
              to="/"
              className="nav-list__link"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Главная
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/work"
              className="nav-list__link"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Портфолио
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/about"
              className="nav-list__link"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Обо мне
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header