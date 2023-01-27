import React from "react"

function Banner({image, texte}) {
  return (
    <div className="banner">
      <img
        className="banner__image"
        src={image}
        alt="Arrière-plan de la bannière"
      />
      <h1 className="banner__text">{texte}</h1>
    </div>
  )
}

export default Banner
