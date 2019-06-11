import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Modal, Image } from "semantic-ui-react";
import { Facebook } from "react-content-loader";

import parse from "html-react-parser";

class News extends Component {
  state = {
    data: null,
    loading: true,
    open: false,
    title: "",
    content: "",
    thumbnail: ""
  };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });

  displayData = ({ ...data }) => {
    this.setState({ open: true });
    this.setState({ title: data.title });
    this.setState({ content: data.content });
    this.setState({ thumbnail: data.thumbnail });
  };

  card = () => {
    return <div>Hello World</div>;
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

  displayLoading = () => {
    let loading = [];
    for (let index = 0; index < 10; index++) {
      loading.push(
        <div className="column blur">
          <Facebook />
        </div>
      );
    }
    return loading;
  };

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        {console.log(this.state.data)}
        <Helmet>
          <title>KOOMPI | News and Events</title>
          <meta
            name="keywords"
            content="koompi news, news and events koompi, koompi news and events, koompi, smallworld venture"
          />
          <meta name="description" content="koompi news and events" />
        </Helmet>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          size="small"
        >
          {/* <Modal.Header></Modal.Header> */}
          <Image src={this.state.thumbnail} fluid />
          <Modal.Content>
            <h3>{this.state.title}</h3>
            <p> {parse(this.state.content)} </p>
          </Modal.Content>
        </Modal>
        <div className="ui container">
          <center>
            <h1 className="kosmosConentNews">News and Events</h1>
          </center>
          <div className="ui stackable three column grid">
            {!this.state.data ? (
              <React.Fragment>{this.displayLoading()}</React.Fragment>
            ) : (
              this.state.data.map(post => {
                return (
                  <div
                    className="column blur"
                    key={post.pubDate}
                    onClick={e => {
                      this.displayData({ ...post });
                    }}
                  >
                    <center className="shadowEvent">
                      <div
                        style={{
                          backgroundImage: `url(${post.thumbnail})`,
                          height: "200px",
                          backgroundPosition: "center center",
                          backgroundSize: "cover"
                        }}
                      />
                      <div className="index-background">
                        <p className="byDate">
                          <span>{new Date(post.pubDate).toDateString()}</span>
                        </p>
                        <h4>{post.title}</h4>
                        <p className="index-description">
                          {parse(post.content.substring(0, 100) + "...")}
                        </p>

                        <p className="bySomeOne">
                          By: <span>{post.author}</span>
                        </p>
                      </div>
                    </center>
                  </div>
                );
              })
            )}
          </div>
        </div>
        {this.state.open ? this.card() : ""}
        {console.log(this.state.data)}
        <Footer />
      </React.Fragment>
    );
  }
}

export default News;
