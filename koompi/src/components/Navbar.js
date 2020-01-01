import React from 'react'
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function Navbar() {
    return (
       <React.Fragment>
       <Header className="header">
      {/* <div className="logo" /> */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0"><img className="logo" src="./img/Koompi-White.png"/></Menu.Item>
        <Menu.Item key="1">KOOMPI E11</Menu.Item>
        <Menu.Item key="2">KOOMPI B14</Menu.Item>
        <Menu.Item key="3">KOOMPI B15</Menu.Item>
        <Menu.Item key="4">KOOMPI OS</Menu.Item>
      </Menu>   
    </Header>
       </React.Fragment>
    )
}

export default Navbar

