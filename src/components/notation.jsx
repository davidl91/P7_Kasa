import React from "react"
import starfull from "../assets/star-full.svg"
import starempty from "../assets/star-empty.svg"

function Notation({note}) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="notation">
      {stars.map((star) => {
        if (note >= star) {
          return (
            <img
              key={star}
              className="notation__star"
              src={starfull}
              alt="Icone d'étoile plein"
            />
          )
        }
        return (
          <img
            key={star}
            className="notation__star"
            src={starempty}
            alt="Icone d'étoile vide"
          />
        )
      })}
    </div>
  )
}

export default Notation
