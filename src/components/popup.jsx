// import React, { Component } from 'react';
// import Modal from 'react-awesome-modal';

// export default class Examples extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible : true
//         }
//     }

//     closeModal() {
//         this.setState({
//             visible : false
//         });
//     }
//     render() {
//         return (
//             <section>
//                 <div>
//                 {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
//                 <Modal 
//                     className="zoomInUp"
//                     visible={this.state.visible}
//                     width="666"
//                     height="411"
//                     effect="fadeInUp"
//                     onClickAway={() => this.closeModal()}
//                 >
//                     <div className="modal-popup">
//                     <div className="width-modal">
//                         <h3>200$</h3>
//                         <img src="koompi-battery.jpg" alt=""/>
//                         {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
//                     </div>
//                     </div>
//                 </Modal>
//                 </div>
//             </section>
//         );
//     }
// }



// import React, {useState} from 'react'
// import Modal from "react-responsive-modal";
// const Toggle = () => {
//     return(
//         <div className=" animated zoomIn bounce delay-30ms Module-background">
//         <Modal>
         
//          <h1>hello world</h1>
        
//         </Modal>
//         </div>
//     )
// }

// function popup() {
//     const [Popup, setPopup] = useState(true)
//     const closeModule = () => {
//         setPopup(false)
//     }

//     return (
//        <React.Fragment>
//            <button onClick={closeModule}>close</button>
//            {Popup ? <Toggle/>:""}
//        </React.Fragment>
//     )
// }

// export default popup

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
                <h3>$339.00</h3>
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


