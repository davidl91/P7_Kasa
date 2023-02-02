import React from "react"
import {Link} from "react-router-dom"

function Error() {
  return (
    <section className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404__back">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Error
