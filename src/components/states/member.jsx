import React, { Component } from "react";

class MemberState extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Rithy THUL",
        position: "PR and Partnership",
        image: "img/team/rithy.png"
      },
      {
        id: 2,
        name: "Sela THUL",
        position: "Linux Developer",
        image: "img/team/sela.png"
      },
      {
        id: 3,
        name: "Saing SAB",
        position: "Kernel Developer",
        image: "img/team/saing.png"
      },
      {
        id: 4,
        name: "Vuthy SAN",
        position: "Full Stack Developer",
        image: "img/team/vuthy.png"
      },
      {
        id: 5,
        name: "Panha YOU",
        position: "Sale & Marketing Manager",
        image: "img/team/panha_you.jpg"
      },
      {
        id: 6,
        name: "Panha Sok",
        position: "Graphic Designer",
        image: "img/team/panha.png"
      },
      {
        id: 7,
        name: "Sokunthy CHAN",
        position: "Accountant",
        image: "img/team/khunthy.png"
      },
      {
        id: 8,
        name: "Brilliant PHAL",
        position: "Linux Administator",
        image: "img/team/brillaint.jpg"
      },
      {
        id: 9,
        name: "Sreyleap SUN",
        position: "Customer service",
        image: "img/team/leap.jpg"
      },
      {
        id: 10,
        name: "Chandara VIREAK",
        position: "Head of Design",
        image: "img/team/dara.png"
      },
      {
        id: 11,
        name: "Sofy THY",
        position: "Marketing Officer",
        image: "img/team/sofy.jpg"
      },
      {
        id: 12,
        name: "Raksme VEN",
        position: "Accountant",
        image: "img/team/reaksmie.jpg"
      },
      {
        id: 13,
        name: "Sreysor KHEM",
        position: "Customer Services",
        image: "img/team/sreysor.jpg"
      },
    ]
  };
  render() {
    return (
      <div className="ui container paddingAbout">
        <h1 className="memberTitle">Team Member</h1>
        <div className="ui grid">
          <div className="doubling five column row">
            {this.state.data.map(info => (
              <div className="column" key={info.id}>
                <div>
                  <center>
                    <img
                      src={info.image}
                      className="ui fluid image teamImage"
                      alt= {info.name + info.position } 
                    />
                    <h3 className="memberName">{info.name}</h3>
                    <p className="memberPosition">{info.position}</p>
                  </center>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MemberState;
