import React from 'react';
import { Row, Col, Card, Tag } from 'antd';
import renderHTML from './editorJsToHtml';
import NProgress from 'nprogress';
import { SEARCH_POST } from './graphql/query';
import _ from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import moment from 'moment';
import countWord from 'word-count';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer';

const queryString = require('query-string');

function Search(props) {
  const parsed = queryString.parse(props.location.search);
  const result = parsed.query;
  const { error, loading, data } = useQuery(SEARCH_POST, {
    variables: { query: slugify(result) }
  });
  if (error) {
    console.log(error);
    return null;
  }
  if (loading) {
    NProgress.start();
    return null;
  }
  NProgress.done();

  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{ marginTop: '90px', marginBottom: '50px' }}
        className="container"
      >
        <h2>Your Result: {result}</h2>
        <Row gutter={24}>
          {data.postSearch.map((data, index) => {
            const title = data.title.replace(/^(.{70}[^\s]*).*/, '$1') + '\n';
            return (
              // {`http://localhost:8080` + data.thumnail}
              <Col span={12} style={{ marginBottom: '24px' }} key={index}>
                <div className="cardHeight">
                  <Link
                    to={`/news-and-events/${slugify(data.title.toLowerCase())}`}
                  >
                    <Card
                      cover={
                        <div
                          style={{
                            backgroundImage: `url("http://localhost:8080${data.thumnail}")`
                          }}
                          className="postThumnail"
                        ></div>
                      }
                    >
                      <p>
                        <Tag color="blue">
                          Date:{' '}
                          {moment
                            .unix(data.created_at / 1000)
                            .format('YYYY, MMMM DD')}
                        </Tag>
                      </p>
                      <h1 className="news-and-events-title">
                        {countWord(data.title) > 12
                          ? title + '...'
                          : data.title}
                      </h1>

                      {/* <div className="news-and-events-desc">
                    {parse(description.substring(0, 200) + '...')}
                  </div> */}
                    </Card>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Search;