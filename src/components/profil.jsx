import React from "react"

function Profil({texte, image}) {
  return (
    <div className="profil">
      <p className="profil__name">{texte}</p>
      <img className="profil__image" src={image} alt="Profil utilisateur" />
    </div>
  )
}

export default Profil
