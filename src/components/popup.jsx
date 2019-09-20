import React, {useState} from 'react'
import Modal from 'react-responsive-modal'
import { NavLink, Link } from "react-router-dom";
// import Modal from "react-animated-modal";


function popup() {

    const [Popup, setPopup] = useState({open:true})
    const onCloseModal = () => {
        setPopup({open:false});
    }
    // const openModal = () => {
    //     setPopup({open:true});
    // }
    const {open} = Popup;
    return (
        <div>
            {/* <button onClick={openModal}>Open modal</button> */}
            <Modal 
            type="swing" open={open} onClose={onCloseModal}>
            <div className="Module-background">
                <h3>$369.00</h3>
                <center className="image-popup">
                <img className=" ui small image" src="/img/IMG_5515 (2).png"/>
                </center>
                <center className=" p-of-popup">
                <h1>KOOMPI</h1> 
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti et repellat magni quos, consequatur sed. Exercitationem consequatur minima temporibus adipisci.</p>
                <NavLink
                className="ui button"
                to="/preorder"
                >
                Buy
                </NavLink>
                </center>          
            </div>
            </Modal>
        </div>
    )
}

export default popup


