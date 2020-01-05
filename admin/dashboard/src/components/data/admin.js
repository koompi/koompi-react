import React from "react";
import { useQuery } from "@apollo/react-hooks";

// ===== Query Section =====
import { GET_USERS } from "../../graphql/query";

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

export { UserTotal };
