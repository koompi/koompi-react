import React, { Component } from 'react';
import Navbar from './navbar';

class Retailer extends Component {
    state = {
        data: [
            { id: 1, logo: "img/retailers/it-store.png", name: "IT Store", location: "" },
            { id: 2, logo: "img/retailers/ufo-logo.png", name: "UFO Store", location: ""},
            { id: 3, logo: "img/retailers/E-shop-cam.png", name: "E Shop Cambodia", location: "" },
            { id: 4, logo: "img/retailers/PRC.png", name: "PRC បញ្ញរ៉ុង", location: "" },
            { id: 5, logo: "img/retailers/LS.png", name: "IT-Store", location: "" },
            { id: 6, logo: "img/retailers/BCS.png", name: "IT-Store", location: "" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="ui container">
                    <center>
                        <h2>Our Retailer</h2>
                        <div className="ui stackable four column grid">
                            {this.state.data.map(data => (
                                <div className="column" key={data.id}>
                                    <div className="image-card">
                                        <img src={data.logo} className="ui fluid image" alt={data.name} />
                                        <h3>{data.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </center>
                </div>
            </React.Fragment>
        );
    }
}

export default Retailer;