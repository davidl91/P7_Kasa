import React, {useState, useEffect} from "react"
import {useParams, Navigate} from "react-router-dom"
import Gallery from "../../components/gallery"
import Tag from "../../components/tag"
import Profil from "../../components/profil"
import Notation from "../../components/notation"
import Collapse from "../../components/collapse"

function Location() {
  const {id} = useParams()
  const [datas, setDatas] = useState({
    pictures: [],
    title: "",
    location: "",
    tags: [],
    host: {name: "", picture: ""},
    rating: "",
    description: "",
    equipments: [],
  })

  useEffect(() => {
    fetch("../logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const location = data.find((data) => data.id === id)
        setDatas(location)
      })
  }, [id])

  if (datas === undefined) {
    return <Navigate replace to="/Error404" />
  }

  return (
    <>
      <Gallery image={datas.pictures} />
      <section className="location">
        <div className="location__text">
          <h1 className="location__title">{datas.title}</h1>
          <p className="location__paragraph">{datas.location}</p>
          <Tag texte={datas.tags} />
        </div>
        <div className="location__info">
          <Profil texte={datas.host.name} image={datas.host.picture} />
          <Notation note={datas.rating} />
        </div>
      </section>
      <section className="toggles">
        <Collapse title="Description" description={datas.description} />
        <Collapse title="Équipements" description={datas.equipments} />
      </section>
    </>
  )
}

export default Location
