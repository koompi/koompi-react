import React, { Component } from "react"

class MemberState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 0,
          name: "Rithy THUL",
          position: "PR and Partnership",
          image: "img/team/rithy.webp",
          cate: 1
        },
        {
          id: 1,
          name: "Sela THUL",
          position: "Linux Developer",
          image: "img/team/sela.webp",
          cate: 2
        },
        {
          id: 3,
          name: "Hongsea HENG",
          position: "Junior System Engineer",
          image: "img/team/Hongsea.webp",
          cate: 2
        },
        // {
        //   name: "Rithy SOUN",
        //   position: "Linux Developer",
        //   image: "img/team/sela.webp",
        //   cate: 2
        // },
        {
          id: 4,
          name: "Veasna MA",
          position: "Linux Developer",
          image: "img/team/veasna.webp",
          cate: 2
        },
        {
          id: 5,
          name: "Sereyvathana AING",
          position: "Linux Developer",
          image: "img/team/Chheng.webp",
          cate: 2
        },
        {
          id: 6,
          name: "Brilliant PHAL",
          position: "Linux Administator",
          image: "img/team/brillaint.webp",
          cate: 2
        },
        {
          id: 7,
          name: "Lykheang MOEURN",
          position: "Backend Developer",
          image: "img/team/lykhhean.webp",
          cate: 2
        },
        {
          id: 8,
          name: "Nath LAY ",
          position: "Backend Developer",
          image: "img/team/net.webp",
          cate: 2
        },
        {
          id: 9,
          name: "Vuthy SAN",
          position: "Full Stack Web Developer",
          image: "img/team/vuthy.webp",
          cate: 2
        },
        {
          id: 10,
          name: "Sovanden SARIM ",
          position: "Frontend Web Developer",
          image: "img/team/Den.webp",
          cate: 2
        },
        {
          id: 11,
          name: "Sophal LOEM",
          position: "Web Design",
          image: "img/team/sophal.webp",
          cate: 2
        },
        {
          id: 12,
          name: "Sovannchornai SO",
          position: "Web Design",
          image: "img/team/chorernai.webp",
          cate: 2
        },
        {
          id: 13,
          name: "Shenshing LY",
          position: "Research and Development (Pionium)",
          image: "img/team/Shing.webp",
          cate: 2
        },
        {
          id: 14,
          name: "Thith THIN",
          position: "Research and Development (Pionium)",
          image: "img/team/Thith.webp",
          cate: 2
        },
        {
          id: 15,
          name: "Kalin LEOB",
          position: "Research and Development (Pionium)",
          image: "img/team/Kalin.webp",
          cate: 2
        },
        {
          id: 16,
          name: "Sophim PHIN",
          position: "Mobile Developer",
          image: "img/team/Phim.webp",
          cate: 2
        },
        {
          id: 17,
          name: "Panha Sok",
          position: "Graphic Designer",
          image: "img/team/panha.webp",
          cate: 2
        },
        {
          id: 18,
          name: "Chandara VIREAK",
          position: "Head of Design",
          image: "img/team/dara.webp",
          cate: 2
        },
        {
          id: 19,
          name: "Visai TRY ",
          position: "Technician",
          image: "img/team/sai.webp",
          cate: 3
        },
        {
          id: 20,
          name: "Sivyean SUY",
          position: "Technician",
          image: "img/team/sivyean.webp",
          cate: 3
        },
        {
          id: 21,
          name: "Mesa MENG",
          position: "Technician",
          image: "img/team/Mesa.webp",
          cate: 3
        },
        // {
        //   name: "Monirak YIM",
        //   position: "Hardware",
        //   image: "img/team/den.webp",
        //   cate: 3
        // },
        {
          id: 22,
          name: "Makara SANN",
          position: "Facilitator",
          image: "img/team/Makra.webp",
          cate: 4
        },
        {
          id: 23,
          name: "Kimhong HIENG",
          position: "Mathematician",
          image: "img/team/Hong.webp",
          cate: 4
        },
        {
          id: 24,
          name: "Phearin HAY",
          position: "KOOMPI FORCE Content Producer",
          image: "img/team/Phearin.webp",
          cate: 4
        },
        {
          id: 25,
          name: "Panha YOU",
          position: "Sale & Marketing Manager",
          image: "img/team/panha_you.webp",
          cate: 5
        },
        {
          id: 26,
          name: "Sreyneang SOKHA",
          position: "Sale & Marketing",
          image: "img/team/sreyneang.webp",
          cate: 5
        },
        {
          id: 27,
          name: "Raksme VEN",
          position: "Accountant",
          image: "img/team/reaksmie.webp",
          cate: 5
        },
        {
          id: 28,
          name: "Sofy THY",
          position: "Business Development officer",
          image: "img/team/sofy.webp",
          cate: 6
        },
        {
          id: 29,
          name: "Monika VIRAK",
          position: "Community Manager",
          image: "img/team/Molika.webp",
          cate: 6
        },
        {
          id: 30,
          name: "Hengsrun SEANG",
          position: " Communication & Marketing ",
          image: "img/team/Srun.webp",
          cate: 6
        }
      ]
    }
  }

  render() {
    const { data } = this.state
    const businessDev = data.filter((user) => user.cate === 1)
    const softwareTeam = data.filter((user) => user.cate === 2)
    const hardwareTeam = data.filter((user) => user.cate === 3)
    const steamTeam = data.filter((user) => user.cate === 4)
    const saleTeam = data.filter((user) => user.cate === 5)
    const communicationTeam = data.filter((user) => user.cate === 6)
    return (
      <div className="ui container paddingAbout">
        <h1 className="memberTitle">Team Member</h1>

        <div className="ui grid">
          <h2>Business Development</h2>
          <div className="doubling five column row">
            {businessDev.map((info) => (
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

        <div className="ui grid">
          <h2>Hardware Teams</h2>
          <div className="doubling five column row">
            {hardwareTeam.map((info) => (
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

        <div className="ui grid">
          <h2>KOOMPI FORCE</h2>
          <div className="doubling five column row">
            {steamTeam.map((info) => (
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

        <div className="ui grid">
          <h2>Sales and Supplier Relation</h2>
          <div className="doubling five column row">
            {saleTeam.map((info) => (
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

        <div className="ui grid">
          <h2>Communication and Marketing</h2>
          <div className="doubling five column row">
            {communicationTeam.map((info) => (
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

        <div className="ui grid">
          <h2>Software Teams</h2>
          <div className="doubling five column row">
            {softwareTeam.map((info) => (
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
    )
  }
}

export default MemberState
