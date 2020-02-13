import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Layout, Menu, Badge, Icon, Drawer } from 'antd';
import { IoMdMenu } from 'react-icons/io';
import { CartContext } from '../CartContext';

const { Header, Sider } = Layout;
const laptop = localStorage.getItem('koompi');

function RightNavbar() {
  const ctx = useContext(CartContext);
  const result = ctx.items;

  result.map(data => console.log('rest', data.quantity));

  return (
    <div className="rightNavbarHidden">
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>
          <NavLink activeClassName="koompi-active" to="/koompi-e11">
            <span>KOOMPI E11</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/koompi-e">
          <NavLink exact activeClassName="koompi-active" to="/koompi-e13">
            <span>KOOMPI E13</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item>
          <a
            href="https://pionux.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>KOOMPI OS</span>
          </a>
        </Menu.Item>

        <Menu.Item>
          <a
            href="https://pionux.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>KOOMPI ACADEMY</span>
          </a>
        </Menu.Item>
        {/* JSON.parse(laptop).length */}
        <Menu.Item>
          <NavLink exact activeStyle={{ color: 'white' }} to="/shop/bag">
            <Badge count={1}>
              <Icon type="shopping-cart" className="shopping-cart-icon" />
            </Badge>
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}

function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <React.Fragment>
      <Header className="header">
        <div className="container">
          <IoMdMenu className="mobileMenu" onClick={handleChange} />
          <Link to="/">
            <img className="logo" src="/img/koompi-sym-01.png" alt="koompi" />
          </Link>
          <div className="koompi">
            <RightNavbar />
            <Drawer
              title={false}
              placement="left"
              closable={false}
              onClose={handleChange}
              visible={visible}
            >
              <Menu>
                <Menu.Item>
                  <NavLink activeClassName="koompi-active" to="/koompi-e11">
                    <span>KOOMPI E11</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="/koompi-e">
                  <NavLink
                    exact
                    activeClassName="koompi-active"
                    to="/koompi-e13"
                  >
                    <span>KOOMPI E13</span>
                  </NavLink>
                </Menu.Item>

                <Menu.Item>
                  <a
                    href="https://pionux.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>KOOMPI OS</span>
                  </a>
                </Menu.Item>

                <Menu.Item>
                  <a
                    href="https://pionux.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>KOOMPI ACADEMY</span>
                  </a>
                </Menu.Item>

                <Menu.Item>
                  <NavLink
                    exact
                    activeStyle={{ color: 'white' }}
                    to="/shop/bag"
                  >
                    <Badge>
                      <Icon
                        type="shopping-cart"
                        className="shopping-cart-icon"
                      />
                    </Badge>
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </div>
      </Header>
    </React.Fragment>
  );
}

export default Navbar;
