import React from "react"
import {useParams, Navigate} from "react-router-dom"
import datas from "../../datas/logements.json"
import Slideshow from "../../components/slideshow"
import Tag from "../../components/tag"
import Profil from "../../components/profil"
import Notation from "../../components/notation"
import Collapse from "../../components/collapse"

function Location() {
  const locationId = useParams()
  const location = datas.find((data) => data.id === locationId.id)

  if (location === undefined) {
    return <Navigate replace to="/Error404" />
  }

  return (
    <>
      <Slideshow image={location.pictures} />
      <section className="location">
        <div className="location__text">
          <h1 className="location__title">{location.title}</h1>
          <p className="location__paragraph">{location.location}</p>
          <Tag texte={location.tags} />
        </div>
        <div className="location__info">
          <Profil texte={location.host.name} image={location.host.picture} />
          <Notation note={location.rating} />
        </div>
      </section>
      <section className="toggles">
        <Collapse title="Description" description={location.description} />
        <Collapse title="Équipements" description={location.equipments} />
      </section>
    </>
  )
}

export default Location
