import React, { Component } from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Retailer extends Component {
    state = {
        data: [
            { id: 1, logo: "img/retailers/it-store.png", name: "IT Store", location: "https://www.facebook.com/pg/store.sombokit/about/?ref=page_internal" },
            { id: 2, logo: "img/retailers/ufo-logo.png", name: "UFO Store", location: "https://www.facebook.com/pg/ufostorekh/about/?ref=page_internal"},
            { id: 3, logo: "img/retailers/E-shop-cam.png", name: "E-Shop Cambodia", location: "https://www.facebook.com/pg/eshopcambo/about/?ref=page_internal" },
            { id: 4, logo: "img/retailers/PRC.png", name: "PRC បញ្ញរ៉ុង", location: "https://www.facebook.com/pg/prcomputerservice/about/?ref=page_internal" },
            { id: 5, logo: "img/retailers/LS.png", name: "Leang sreng computer", location: "https://www.facebook.com/pg/Leang-sreng-computer-1-229172480968041/about/?ref=page_internal" },
            { id: 6, logo: "img/retailers/BCS.png", name: "BCS Computer", location: "https://www.facebook.com/pg/bcscomputer1/about/?ref=page_internal" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="ui container">
                    <center>
                        <h2 className="retailer">Our Retailer</h2>
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
                <Footer />
            </React.Fragment>
        );
    }
}

export default Retailer;