import React, {useState} from "react"
import arrowback from "../assets/arrow-back.svg"
import arrowforward from "../assets/arrow-forward.svg"

function Slideshow({image}) {
  const [imgIndex, setImgIndex] = useState(0)

  const imgback = () => {
    if (imgIndex === 0) {
      return setImgIndex(image.length - 1)
    } else {
      return setImgIndex(imgIndex - 1)
    }
  }

  const imgforward = () => {
    if (imgIndex === image.length - 1) {
      return setImgIndex(0)
    } else {
      return setImgIndex(imgIndex + 1)
    }
  }

  return (
    <div className="slideshow">
      {image.length > 1 && (
        <img
          className="slideshow__back"
          src={arrowback}
          alt="Fléche précedént"
          onClick={imgback}
        />
      )}
      <img
        className="slideshow__image"
        src={image[imgIndex]}
        alt="Illustration du logement"
      />
      <span className="slideshow__index">
        {imgIndex + 1}/{image.length}
      </span>
      {image.length > 1 && (
        <img
          className="slideshow__forward"
          src={arrowforward}
          alt="Fléche suivant"
          onClick={imgforward}
        />
      )}
    </div>
  )
}

export default Slideshow
