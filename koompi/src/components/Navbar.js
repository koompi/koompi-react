import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
function Navbar() {
	return (
		<React.Fragment>
			<Header className='header'>
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={['/']}
					selectedKeys={['/']}>
					<Menu.Item key='/'>
						<img className='logo' src='./img/Koompi-White.png' />
						<Link to='/'></Link>
					</Menu.Item>
					<Menu.Item className='koompi' key='1'>
						KOOMPI B15
					</Menu.Item>
					<Menu.Item className='koompi' key='/koompi-e'>
						<Link to='/koompi-e'>KOOMPI E</Link>
					</Menu.Item>
					<Menu.Item className='koompi' key='/koompi-pro'>
						<Link to='/koompi-pro'>KOOMPI PRO</Link>
					</Menu.Item>
					<Menu.Item className='koompi' key='4'>
						KOOMPI OS
					</Menu.Item>
				</Menu>
			</Header>
		</React.Fragment>
	);
}

export default Navbar;
