import React, { useContext } from "react";
import { Layout, Popover } from "antd";
import { UserContext, UserProvider } from "../../context/userContext";

const { Header } = Layout;

function TopNavbar() {
  const userContext = useContext(UserContext);
  const { avatar, fullname, email } = userContext.user;
  const content = (
    <div>
      <p>Settings</p>
      <p>
        <a href="/logout">Logout</a>
      </p>
    </div>
  );

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Popover
        placement="bottomRight"
        title={
          <div>
            <div>
              <b>{fullname}</b>
            </div>
            <p>{email}</p>
          </div>
        }
        content={content}
      >
        <img src={avatar} alt={fullname} className="avatar" />
      </Popover>
    </Header>
  );
}

export default TopNavbar;
