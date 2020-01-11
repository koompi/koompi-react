import React from "react";
import { useQuery } from "@apollo/react-hooks";

// ===== Query Section =====
import {
  GET_USERS,
  GET_POSTS,
  GET_PAGES,
  GET_RETAILERS
} from "../../graphql/query";

const UserTotal = () => {
  const { error, loading, data } = useQuery(GET_USERS);
  if (loading) {
    return <p className="card_desc">loading ...</p>;
  }
  if (error) console.log(error);
  if (data) {
    console.log();
    return (
      <div>
        <center>
          <span className="adminFirstSectionFont">
            <b>{data.users.length}</b> users
          </span>
        </center>
      </div>
    );
  }
};
const TotalPost = () => {
  const { error, loading, data } = useQuery(GET_POSTS);
  if (loading) {
    return <p className="card_desc">loading ...</p>;
  }
  if (error) console.log(error);
  if (data) {
    console.log();
    return (
      <div>
        <center>
          <span className="adminFirstSectionFont">
            <b>{data.posts.length}</b> posts
          </span>
        </center>
      </div>
    );
  }
};

const TotalPage = () => {
  const { error, loading, data } = useQuery(GET_PAGES);
  if (loading) {
    return <p className="card_desc">loading ...</p>;
  }
  if (error) console.log(error);
  if (data) {
    console.log();
    return (
      <div>
        <center>
          <span className="adminFirstSectionFont">
            <b>{data.pages.length}</b> pages
          </span>
        </center>
      </div>
    );
  }
};

const TotalRetailer = () => {
  const { error, loading, data } = useQuery(GET_RETAILERS);
  if (loading) {
    return <p className="card_desc">loading ...</p>;
  }
  if (error) console.log(error);
  if (data) {
    console.log();
    return (
      <div>
        <center>
          <span className="adminFirstSectionFont">
            <b>{data.retailers.length}</b> retailers
          </span>
        </center>
      </div>
    );
  }
};
export { UserTotal, TotalPost, TotalPage, TotalRetailer };
