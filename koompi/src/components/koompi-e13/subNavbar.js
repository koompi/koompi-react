import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

function SubNavbar() {
  return (
    <div>
      <div className="subNavbarPosition" style={{ background: 'white' }}>
        <Menu
          style={{ borderBottom: 'none' }}
          className="container"
          theme="white"
          mode="horizontal"
        >
          <Menu.Item className="sub-navbar-a">
            <NavLink
              exact
              activeStyle={{ color: '#1890ff' }}
              to="/koompi-e13/specs"
            >
              <span>Specifications</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item className="sub-navbar-a">
            <NavLink exact activeStyle={{ color: '#1890ff' }} to="/koompi-e13">
              <span>Overview</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default SubNavbar;
