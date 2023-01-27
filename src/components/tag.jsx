import React from "react"

function Tag({texte}) {
  return (
    <div className="location__tags">
      {texte.map((tag) => {
        return (
          <span key={tag} className="tag">
            {tag}
          </span>
        )
      })}
    </div>
  )
}

export default Tag
