import React from "react"
import logofooter from "../assets/logo-footer.svg"

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logofooter} alt="logo de Kasa" />
      <span className="footer__text">© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
