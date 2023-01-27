import React from "react"
import {Link} from "react-router-dom"
import logoheader from "../assets/logo-header.svg"

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoheader} alt="logo de Kasa" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
