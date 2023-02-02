import React from "react"
import datas from "../../datas/logements.json"
import Banner from "../../components/banner"
import Card from "../../components/card"
import bannerhome from "../../assets/banner-home.png"

function Home() {
  return (
    <>
      <Banner image={bannerhome} texte="Chez vous, partout et ailleurs" />
      <section className="cards">
        {datas.map((data) => {
          return <Card key={data.id} data={data} />
        })}
      </section>
    </>
  )
}

export default Home
