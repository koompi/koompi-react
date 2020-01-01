import React from "react";
import { Layout, Popover } from "antd";
const { Header } = Layout;
function TopNavbar() {
  const content = (
    <div>
      <p>Settings</p>
      <p>Sign out</p>
    </div>
  );
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Popover
        placement="bottomRight"
        title={
          <div>
            <div>
              <b>SAN Vuthy</b>
            </div>
            <p>san.vuthy08@gmail.com</p>
          </div>
        }
        content={content}
      >
        <img
          src="https://randomuser.me/api/portraits/women/57.jpg"
          alt=""
          className="avatar"
        />
      </Popover>
    </Header>
  );
}

export default TopNavbar;
