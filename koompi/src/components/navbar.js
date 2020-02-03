import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Badge, Icon } from 'antd';

const { Header } = Layout;

function Navbar() {
  return (
    <React.Fragment>
      <Header className="header">
        <div className="container">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['/']}
            selectedKeys={['/']}
          >
            <Menu.Item key="/">
              <img className="logo" src="/img/koompi-sym-01.png" alt="koompi" />
              <NavLink exact activeStyle={{ color: 'white' }} to="/"></NavLink>
            </Menu.Item>

            {/* ===== Navbar ===== */}
            <Menu.Item className="koompi" key="4">
              <NavLink exact activeStyle={{ color: 'white' }} to="/shop/bag">
                <Badge>
                  <Icon type="shopping-cart" className="shopping-cart-icon" />
                </Badge>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="koompi">
              <a
                href="https://pionux.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>KOOMPI OS</span>
              </a>
            </Menu.Item>

            <Menu.Item className="koompi" key="/koompi-e">
              <NavLink exact activeStyle={{ color: 'white' }} to="/koompi-e13">
                <span>KOOMPI E13</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item className="koompi">
              <NavLink to="/koompi-e11">
                <span>KOOMPI E11</span>
              </NavLink>
            </Menu.Item>
            {/* <Menu.Item className="koompi" key="1">
              <NavLink exact activeStyle={{ color: 'white' }} to="/Koompi-b">
                <span>KOOMPI B14</span>
              </NavLink>
            </Menu.Item> */}
          </Menu>
        </div>
      </Header>
    </React.Fragment>
  );
}

export default Navbar;
