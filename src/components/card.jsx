import React from "react"
import {Link} from "react-router-dom"

function Card({data}) {
  return (
    <Link to={`/location/${data.id}`}>
      <article className="card">
        <img
          className="card__image"
          src={data.cover}
          alt={`Illustration du logement ${data.title}`}
        />
        <div className="card__background"></div>
        <h2 className="card__text">{data.title}</h2>
      </article>
    </Link>
  )
}

export default Card
