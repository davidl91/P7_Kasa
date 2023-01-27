import React, {useState} from "react"
import arrow from "../assets/arrow.svg"

function Collapse({title, description}) {
  const [openstate, setOpenstate] = useState(false)

  const handleClick = function (e) {
    e.preventDefault()
    setOpenstate(!openstate)
  }

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={handleClick} type="button">
        <h2 className="collapse__title">{title}</h2>
        <img
          className={`collapse__arrow ${openstate}`}
          src={arrow}
          alt="Icone de la fléche"
        />
      </button>
      {openstate && (
        <div className="collapse__description">
          {Array.isArray(description) ? (
            <ul>
              {description.map((equipement) => {
                return <li key={equipement}>{equipement}</li>
              })}
            </ul>
          ) : (
            description
          )}
        </div>
      )}
    </div>
  )
}

export default Collapse
