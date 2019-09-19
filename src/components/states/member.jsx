import React, { Component } from "react";

class MemberState extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Rithy THUL",
        position: "PR and Partnership",
        image: "img/team/rithy.webp"
      },
      {
        id: 2,
        name: "Sela THUL",
        position: "Linux Developer",
        image: "img/team/sela.webp"
      },
      {
        id: 3,
        name: "Brilliant PHAL",
        position: "Linux Administator",
        image: "img/team/brillaint.webp"
      },

      {
        id: 4,
        name: "Vuthy SAN",
        position: "Full Stack Web Developer",
        image: "img/team/vuthy.webp"
      },
      {
        id: 5,
        name: "Panha YOU",
        position: "Sale & Marketing Manager",
        image: "img/team/panha_you.webp"
      },
      {
        id: 6,
        name: "Panha Sok",
        position: "Graphic Designer",
        image: "img/team/panha.webp"
      },

      {
        id: 8,
        name: "Lykheang MOEURN",
        position: "Backend Developer",
        image: "img/team/lykhhean.webp"
      },
      {
        id: 10,
        name: "Chandara VIREAK",
        position: "Head of Design",
        image: "img/team/dara.webp"
      },
      {
        id: 11,
        name: "Sofy THY",
        position: "Marketing Officer",
        image: "img/team/sofy.webp"
      },
      {
        id: 12,
        name: "Raksme VEN",
        position: "Accountant",
        image: "img/team/reaksmie.webp"
      },
      {
        id: 13,
        name: "Sreysor KHEM",
        position: "Customer Services",
        image: "img/team/sreysor.webp"
      },
      {
        id: 14,
        name: "Veasna MA",
        position: "Web Design",
        image: "img/team/veasna.webp"
      },
      {
        id: 15,
        name: "Sovanden SARIM ",
        position: "Web Design",
        image: "img/team/den.webp"
      },
      {
        id: 16,
        name: "Nath LAY ",
        position: "Backend Developer",
        image: "img/team/net.webp"
      }
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
                      alt={info.name + info.position}
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
