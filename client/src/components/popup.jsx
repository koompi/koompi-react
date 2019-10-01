import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { NavLink, Link } from "react-router-dom";
// import Modal from "react-animated-modal";

function popup() {
  const [Popup, setPopup] = useState({ open: true });
  const onCloseModal = () => {
    setPopup({ open: false });
  };
  // const openModal = () => {
  //     setPopup({open:true});
  // }
  const { open } = Popup;
  return (
    <div>
      {/* <button onClick={openModal}>Open modal</button> */}
      <Modal
        classNames="modal_popup"
        type="swing"
        open={open}
        onClose={onCloseModal}
      >
        <div className="image-popup">
          <center>
            <h1>KOOMPI</h1>
          </center>
          <div className="koompi_price">
            <h3>$369.00</h3>
          </div>

          {/* <img className="ui small image" src="/img/banner_order.jpg" /> */}
        </div>
        <div className="Module-background submit-button">
          <center className="p-of-popup">
            <p>
              Enjoy the revolution of simplicity, power, privacy and freedom.
              Beautifully Open Source.
            </p>
            <Link className="ui button" to="/preorder">
              Shop Now
            </Link>
          </center>
        </div>
      </Modal>
    </div>
  );
}

export default popup;
