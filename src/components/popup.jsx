import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : true
        }
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    render() {
        return (
            <section>
                <div>
                {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
                <Modal 
                    visible={this.state.visible}
                    width="666"
                    height="411"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal-popup">
                    <div className="width-modal">
                        <h3>200$</h3>
                        <img src="video-player.webp" alt=""/>
                        {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                    </div>
                    </div>
                </Modal>
                </div>
            </section>
        );
    }
}