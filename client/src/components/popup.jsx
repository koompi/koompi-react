import React, { useState } from "react"
import Modal from "react-responsive-modal"
import { Link } from "react-router-dom"

function DisplayModal() {
  const [popup, setPopup] = useState({ open: true })
  const onCloseModal = () => {
    setPopup({ open: false })
  }
  const { open } = popup
  return (
    <div>
      <Modal className="modal_popup" type="swing" open={open} onClose={onCloseModal}>
        <div className="image-popup">
          <center>
            <h1>KOOMPI</h1>
          </center>
          <div className="koompi_price">
            <h4>
              <strike>$369.00</strike>
            </h4>
            <h3>$333.00</h3>
          </div>
        </div>
        <div className="Module-background submit-button">
          <center className="p-of-popup">
            <p>
              Enjoy the revolution of simplicity, power, privacy and freedom.
              Beautifully Open Source.
            </p>
            <Link className="ui button" to="/order">
              Pre-Order Now
            </Link>
          </center>
        </div>
      </Modal>
    </div>
  )
}

export default DisplayModal