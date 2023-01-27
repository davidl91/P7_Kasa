import React from "react"
import {Link} from "react-router-dom"
import datas from "../../datas/logements.json"
import Banner from "../../components/banner"
import Card from "../../components/card"
import bannerhome from "../../assets/banner-home.png"

function Home() {
  return (
    <div className="home">
      <Banner image={bannerhome} texte="Chez vous, partout et ailleurs" />
      <section className="home__cards">
        {datas.map((data) => {
          return (
            <article key={data.id}>
              <Link to={`/location/${data.id}`}>
                <Card image={data.cover} texte={data.title} />
              </Link>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Home
