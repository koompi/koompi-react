import React, { Component } from "react"
import Members from "../../data/members.json"

class MemberState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Members
    }
  }

  render() {
    const { data } = this.state
    const businessDev = data.filter((user) => user.category === 1)
    const softwareTeam = data.filter((user) => user.category === 2)
    const hardwareTeam = data.filter((user) => user.category === 3)
    const steamTeam = data.filter((user) => user.category === 4)
    const saleTeam = data.filter((user) => user.category === 5)
    const communicationTeam = data.filter((user) => user.category === 6)
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
                      alt={info.name}
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
                      alt={info.name}
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
                      alt={info.name}
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
                      alt={info.name}
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
                      alt={info.name}
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
                      alt={info.name}
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
