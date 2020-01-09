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
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

const { Header, Content, Footer } = Layout;
const koompiPro = [{ img: '/img/Macbook.png' }];
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
				<Content
					style={{ paddingTop: '100px', paddingBottom: '100px' }}>
					<Row>
						<Col sm={12}>
							<center>
								{/* ========= KOOMPI SECTION =========  */}
								<h1 className='bossTittle-KoompiHome'>
									KOOMPI PRO
								</h1>
								<p className=' container text-koompi-section-banner'>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book
								</p>

								<Dropdown overlay={menu} trigger={['click']}>
									<Button
										className='btn-banner'
										onClick={() => setState(koompiPro)}>
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

			{/* =============Big Section ===============*/}
			<div>
				<div className='content1'>
					<div className='banner1'>
						<center>
							<h1 className='tittle-koompiPro-banner'>
								KOOMPI E11
							</h1>
							<p className='container text-container-content1 text-koompiePro-banner'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book
							</p>
							<div className='readmore'>
								<a href='#'> Read More</a>
							</div>
							<div className='subBanner-koompiPro'>
								<img src='/img/Macbook.png' />
							</div>
						</center>
					</div>
				</div>
				<div className='content2'>
					<div className='banner2'>
						<center>
							<h1 className='tittle-koompiPro-banner'>
								KOOMPI E11
							</h1>
							<p className='container text-container-content1  text-koompiePro-banner'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book
							</p>
							<div className='readmore'>
								<a href='#'> Read More</a>
							</div>
							<div className='subBanner-koompiPro'>
								<img src='/img/Macbook.png' />
							</div>
						</center>
					</div>
				</div>
				<div className='content1'>
					<div className='banner3'>
						<center>
							<h1 className='tittle-koompiPro-banner'>
								KOOMPI E11
							</h1>
							<p className='container text-container-content1 text-koompiePro-banner'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book
							</p>
							<div className='readmore'>
								<a href='#'> Read More</a>
							</div>
							<div className='subBanner-koompiPro'>
								<img src='/img/Macbook.png' />
							</div>
						</center>
					</div>
				</div>
			</div>
			{/* <div className='boss-show-all-section'>
				<div>
					<Typography>
						<center>
							<Title>Which KOOMPI Right For You?</Title>
						</center>
					</Typography>
					<div className='container subboss-show-all-section'>
						<Row>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI Pro
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI E11
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI B14
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
							<Col sm={12}>
								<div className='img-show-all-section'>
									<center>
										<img src='/img/Macbook.png' />
									</center>
									<Title
										className='title-show-all-section'
										level={3}>
										KOOMPI B15
									</Title>
									<Paragraph className='li-show-all-section'>
										
										<li>13.3-inch Retina display1</li>
										<li>2-core Intel Core i5 processor</li>
										<li>Up to 16GB memory </li>
										<li>Up to 1TB storage2 </li>
										<li>Up to 12 hours battery life3</li>
										<li>Backlit keyboard</li>
										<div className='button-show-all-section'>
											<Button type='primary'>Buy</Button>
											<a
												className='link-show-all-section'
												href='#'>
												readmore
												<Icon
													className='icon-right'
													type='right'
												/>
											</a>
										</div>
									</Paragraph>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div> */}
		</React.Fragment>
	);
}

export default Index;
