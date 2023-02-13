import React, {useState, useEffect} from "react"
import Banner from "../../components/banner"
import Card from "../../components/card"
import bannerhome from "../../assets/banner-home.png"

function Home() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch("./logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setDatas(data)
      })
  }, [])

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
