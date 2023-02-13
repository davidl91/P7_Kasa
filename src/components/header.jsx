import React from "react"
import {NavLink} from "react-router-dom"
import logoheader from "../assets/logo-header.svg"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoheader} alt="logo de Kasa" />
      <nav className="header__nav">
        <NavLink className="header__link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header__link" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
