import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function Sub_Navbar_Koompi_E() {
  return (
    <div>
      <div>
        <div style={{ background: 'white' }}>
          <Menu
            style={{ borderBottom: 'none' }}
            className="container"
            theme="white"
            mode="horizontal"
          >
            {/* <Menu.Item key="/">
          
              <Link to="/koompi-e">KOOMPI E</Link>
            </Menu.Item> */}

            {/* ===== Navbar ===== */}

            <Menu.Item className="sub-navbar-a">
              <NavLink
                exact
                activeStyle={{ color: '#1890ff' }}
                to="/koompi-e-specs"
              >
                <span>Specifications</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="sub-navbar-a">
              <NavLink exact activeStyle={{ color: '#1890ff' }} to="/koompi-e">
                <span>Overview</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Sub_Navbar_Koompi_E;
