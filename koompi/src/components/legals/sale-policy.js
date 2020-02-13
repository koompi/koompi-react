import React, { Fragment } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import { useQuery } from '@apollo/react-hooks';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import { GET_LEGALS } from '../graphql/query';
import _ from 'lodash';
import renderHTML from '../editorJsToHtml';

function SalePolicy() {
  const { error, loading, data } = useQuery(GET_LEGALS);
  if (error) console.log(error);
  if (loading) {
    NProgress.start();
    return null;
  }

  const result = _.filter(data.legals, data => data.title === 'Sales Policy');

  NProgress.done();
  const description = renderHTML(result[0].description);
  return (
    <Fragment>
      <Navbar />
      <div className="sale-policy-margin">
        <div className="container">
          {/* <h1>{result[0].title}</h1> */}
          <p>{parse(description)}</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default SalePolicy;
