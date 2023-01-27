import React from "react"

function Card({image, texte}) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={image}
        alt="Illustration de la localisation"
      />
      <div className="card__background"></div>
      <h2 className="card__text">{texte}</h2>
    </div>
  )
}

export default Card
