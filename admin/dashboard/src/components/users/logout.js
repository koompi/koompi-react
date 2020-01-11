import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  });
  return null;
};

export default Logout;
