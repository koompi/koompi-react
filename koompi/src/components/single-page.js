import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import { GET_POST } from './graphql/query';
import Navbar from './navbar';
import moment from 'moment';
import renderHTML from './editorJsToHtml';
import Footer from './footer';

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton
} from 'react-share';

const queryString = require('query-string');

function SinglePage(props) {
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { slug: props.location.pathname.split('/')[2] }
  });

  if (error) console.log(error);
  if (loading) {
    NProgress.start();
    return null;
  }
  NProgress.done();

  console.log(data);
  const { title, thumnail, created_at, tags, slug } = data.post;
  const description = renderHTML(data.post.description);
  return (
    <div>
      <Navbar />
      {/* <p>{description}</p> */}
      <div className="container">
        <div style={{ margin: '40px 0px' }}>
          <div className="background-single-page">
            <img
              src={`http://localhost:8080${thumnail}`}
              alt={title}
              className="img-responsive"
            />
            <div>
              <FacebookShareButton url={slug}>
                <img
                  src="/img/socialMedia/facebook.png"
                  alt=""
                  className="background_socialMedia"
                />
              </FacebookShareButton>
              <TelegramShareButton url={slug}>
                <img
                  src="/img/socialMedia/telegram.png"
                  alt=""
                  className="background_socialMedia"
                />
              </TelegramShareButton>

              <TwitterShareButton url={slug}>
                <img
                  src="/img/socialMedia/twitter.png"
                  alt=""
                  className="background_socialMedia"
                />
              </TwitterShareButton>
            </div>
            <div className="content-desc">
              <p>
                <Tag color="blue">
                  {moment.unix(created_at / 1000).format('YYYY-MM-DD HH:MM')}
                </Tag>
              </p>
              <h3 className="single-title">{title}</h3>
              <p>{parse(description)}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePage;
