import React, { createContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    avatar: ""
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = jwt.decode(token);
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
