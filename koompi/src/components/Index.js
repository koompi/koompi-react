import React, { useState } from 'react';
import { Row, Col } from 'antd';
import {
	content,
	Layout,
	Button,
	Menu,
	Dropdown,
	Breadcrumb,
	Icon
} from 'antd';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;
// const menu = (
// 	<Menu>
// 		<Menu.Item key='0'>
// 			<a href='http://www.alipay.com/'>KOOMPI E11</a>
// 		</Menu.Item>
// 		<Menu.Item key='1'>
// 			<a href='http://www.taobao.com/'>KOOMPI B14</a>
// 		</Menu.Item>
// 		<Menu.Item key='3'>KOOMPI B15</Menu.Item>
// 	</Menu>
// );
const koompiPro = [{ img: '/img/laptop.webp' }];
const koompiE11 = [{ img: '/img/0.png' }];
function Index() {
	const [state, setState] = useState(koompiPro);
	const menu = (
		<Menu>
			<Menu.Item key='0'>
				<a onClick={() => setState(koompiE11)}>KOOMPI E11</a>
			</Menu.Item>
			<Menu.Item key='1'>
				<a href='http://www.taobao.com/'>KOOMPI B14</a>
			</Menu.Item>
			<Menu.Item key='3'>KOOMPI B15</Menu.Item>
		</Menu>
	);
	return (
		<React.Fragment>
			<Navbar />
			<div className='banner'>
				<Content style={{ padding: '100px' }}>
					<Row>
						<Col sm={12}>
							<center>
								{/* ========= KOOMPI SECTION =========  */}
								<h1>KOOMPI PRO</h1>
								<p className='text-container text'>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book
								</p>

								<Dropdown overlay={menu} trigger={['click']}>
									<Button
										// onClick={() => setState(koompiPro)}
										type='primary'>
										KOOMPI PRO <Icon type='down' />
									</Button>
								</Dropdown>
								<a className='readmore-a'>Readmore</a>
							</center>
						</Col>
						<Col sm={12}>
							<center>
								{state.map(states => (
									<div>
										<img
											className='laptop-img'
											src={states.img}></img>
									</div>
								))}
							</center>
						</Col>
					</Row>
				</Content>
			</div>
			<div className='container'>
				<div className='content1'>
					<center>
						<h1>KOOMPI E11</h1>
						<p className='text-container-content1 text'>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book
						</p>
						<div className='readmore'>
							<a href='#'> Read More</a>
						</div>
						{/* <img className="laptop-img" src="./img/laptop.webp"></img> */}
					</center>
					<div className='banner1'></div>
				</div>
				<div className='content1'>
					<center>
						<h1>KOOMPI B14</h1>
						<p className='text-container-content1 text'>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book
						</p>
						<div className='readmore'>
							<a href='#'> Read More</a>
						</div>
						{/* <img className="laptop-img" src="./img/laptop.webp"></img> */}
					</center>
					<div className='banner1'></div>
				</div>
				<div className='content1'>
					<center>
						<h1>KOOMPI B15</h1>
						<p className='text-container-content1 text'>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book
						</p>
						<div className='readmore'>
							<a href='#'> Read More</a>
						</div>
						{/* <img className="laptop-img" src="./img/laptop.webp"></img> */}
					</center>
					<div className='banner1'></div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Index;
