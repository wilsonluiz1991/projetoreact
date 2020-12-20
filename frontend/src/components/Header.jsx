import React from "react";
import logo from '../assets/fullstacklogo.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className=" menu navbar navbar-expand-lg  ">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="100" height="100" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active nav-item-plus">
              <Link className="nav-link " to="/">
                Home <span className="sr-only"> </span>
              </Link>
            </li>
            <li className="nav-item nav-item-plus">
              <Link className="nav-link" to="/produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item nav-item-plus">
              <Link className="nav-link" to="/nossaslojas">
                Nossas lojas
              </Link>
            </li>
            <li className="nav-item nav-item-plus">
              <Link className="nav-link " to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
