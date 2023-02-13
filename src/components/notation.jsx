import React from "react"
import starfull from "../assets/star-full.svg"
import starempty from "../assets/star-empty.svg"

function Notation({note}) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="notation">
      {stars.map((star) => {
        return (
          <img
            key={star}
            className="notation__star"
            src={note >= star ? starfull : starempty}
            alt="Icone d'étoile"
          />
        )
      })}
    </div>
  )
}

export default Notation
