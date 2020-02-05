import React from 'react';
import Navbar from './navbar';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <center>
          <img src="/img/404-02.png" alt="404" className="page-not-found" />
          <h2 className="page-not-found-title">
            Oops! We can't find a page you are looking for
          </h2>
          <Link to="/">
            <Button className="koompiBtn goBack">Back Home</Button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default PageNotFound;
