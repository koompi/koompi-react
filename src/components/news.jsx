import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import axios from "axios";

function strip_html_tags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/<[^>]*>/g, "");
}

class News extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@koompi"
      )
      .then(res => {
        this.setState({ data: res.data.items });
      });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Helmet>
          <title>
            News | Koompi mission is build and provide tools for the next
            generation of engineers, problem solvers and discoverers
          </title>
        </Helmet>
        <div className="ui container">
          <center>
            <h1 className="kosmosConentNews">News and Events</h1>
          </center>
          <div className="ui stackable three column grid">
            {console.log(this.state.data)}
            {this.state.data.map(res => {
              return (
                <div className="column blur" key={res.pubDate}>
                  <a target="_blank" rel="noopener noreferrer" href={res.guid}>
                    <center className="shadowEvent">
                      <div
                        style={{
                          backgroundImage: `url(${res.thumbnail})`,
                          height: "200px",
                          backgroundPosition: "center center",
                          backgroundSize: "cover"
                        }}
                      />
                      <div className="index-background">
                        <p className="byDate">
                          <span>{new Date(res.pubDate).toDateString()}</span>
                        </p>
                        <h4>{res.title}</h4>
                        <p className="index-description">
                          {strip_html_tags(
                            res.content.substring(0, 100) + "..."
                          )}
                        </p>
                        <p className="bySomeOne">
                          By: <span>{res.author}</span>
                        </p>
                      </div>
                    </center>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default News;
