import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Row, Col, Layout } from 'antd';
import { Typography, Divider } from 'antd';
import { Modal, Button } from 'antd';
import { Icon, Badge } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;
const defaultKoompiPro = [{ img: '/img/Macbook.png', price: 369 }];
function KoompiProBuy(props) {
  const handleRemoveItem = index => {
    const cartt = [...cart];
    // setCart(cartt => cartt.filter(item => item.img !== img));
    cartt.splice(index, 1);
    setCart(cartt);
  };

  const [vesible, setVisible] = useState(false);
  const [KoompiPro, setKoompiPro] = useState(defaultKoompiPro);
  const [cart, setCart] = useState([]);
  const addToCart = () => {
    setCart(cart.concat(KoompiPro));
  };
  const calculatePrice = () => {
    return cart.reduce((price, KoompiPro) => price + KoompiPro.price, 0);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div>
          <Content style={{ paddingTop: '100px' }}>
            <Row>
              <Col sm={12}>
                <div>
                  {KoompiPro.map((KoompiPros, index) => (
                    <center>
                      <img
                        style={{ maxWidth: '100%' }}
                        src={KoompiPros.img}
                      ></img>
                    </center>
                  ))}
                  {/* <center>
                    <Row>
                      <Col span={12}>
                        <div className="greyColorKoompiPro"></div>
                      </Col>
                      <Col span={12}>
                        <div className="roseGoldColorKoompiPro"></div>
                      </Col>
                    </Row>
                  </center> */}
                </div>
              </Col>
              <Col sm={12}>
                <div className="container">
                  <Typography>
                    <Title>Koompi Pro</Title>
                    <Paragraph className="li-show-all-section">
                      <li>13.3-inch Retina display1</li>
                      <li>2-core Intel Core i5 processor</li>
                      <li>Up to 16GB memory </li>
                      <li>Up to 1TB storage2 </li>
                      <li>Up to 12 hours battery life3</li>
                      <li>Backlit keyboard</li>
                    </Paragraph>
                  </Typography>
                  <div>
                    {KoompiPro.map((KoompiPros, index) => (
                      <h1 id={index}>Price ${KoompiPros.price}</h1>
                    ))}
                  </div>
                  <div>
                    <Button onClick={() => addToCart()}>Add to cart</Button>
                    <Badge style={{ paddingLeft: '12px' }} count={cart.length}>
                      <Button onClick={() => setVisible(true)} type="primary">
                        <Icon type="shopping-cart" />
                      </Button>
                    </Badge>
                    <Modal
                      visible={vesible}
                      onOk={() => setVisible(false)}
                      onCancel={() => setVisible(false)}
                    >
                      {cart.map((KoompiPro, index) => (
                        <div>
                          <Row>
                            <Col sm={12}>
                              <img
                                style={{
                                  maxWidth: '100%'
                                }}
                                src={KoompiPro.img}
                              ></img>
                            </Col>
                            <Col sm={12}>
                              <h1>{KoompiPro.price}</h1>
                              <Icon
                                onClick={() => handleRemoveItem()}
                                type="delete"
                              />
                            </Col>
                          </Row>
                          <hr></hr>
                        </div>
                      ))}
                      <h1>TOTAL is : ${calculatePrice()}</h1>
                    </Modal>
                    {/* <Button onClick={() => addToCart()}>
											Add to cart
										</Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Content>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KoompiProBuy;

// import React, { useState } from 'react';
// import Navbar from '../Navbar';
// import { Row, Col, Layout } from 'antd';
// import { Typography, Divider } from 'antd';

// const { Title, Paragraph, Text } = Typography;
// const { Content } = Layout;

// const Product = props => {
// 	const { product, children } = props;
// 	return (
// 		<div className='products'>
// 			{product.name} ${product.price}
// 			{children}
// 		</div>
// 	);
// };
// function KoompiProBuy() {
// 	const [products] = useState([
// 		{ name: 'Superman Poster', price: 10 },
// 		{ name: 'Spider Poster', price: 20 },
// 		{ name: 'Bat Poster', price: 30 }
// 	]);

// 	const [cart, setCart] = useState([]);

// 	const addToCart = index => {
// 		setCart(cart.concat(products[index]));
// 	};

// 	const calculatePrice = () => {
// 		return cart.reduce((price, product) => price + product.price, 0);
// 	};
// 	return (
// 		<React.Fragment>
// 			<div className='container'>
// 				<Navbar />
// 				<Row>
// 					<Col sm={12}>
// 						<div>
// 							<img
// 								style={{ maxWidth: '100%' }}
// 								src='/img/Macbook.png'></img>
// 							<center>
// 								<Row>
// 									<Col span={12}>
// 										<div className='greyColorKoompiPro'></div>
// 									</Col>
// 									<Col span={12}>
// 										<div className='roseGoldColorKoompiPro'></div>
// 									</Col>
// 								</Row>
// 							</center>
// 						</div>
// 					</Col>
// 					<Col sm={12}>
// 						<div className='container'>
// 							<Typography>
// 								<Title>Choose Your Koompi Pro</Title>
// 								<Paragraph className='li-show-all-section'>
// 									<li>13.3-inch Retina display1</li>
// 									<li>2-core Intel Core i5 processor</li>
// 									<li>Up to 16GB memory </li>
// 									<li>Up to 1TB storage2 </li>
// 									<li>Up to 12 hours battery life3</li>
// 									<li>Backlit keyboard</li>
// 								</Paragraph>
// 							</Typography>
// 							{products.map((product, index) => (
// 								<Product key={index} product={product}>
// 									<button onClick={() => addToCart(index)}>
// 										Add to cart
// 									</button>
// 								</Product>
// 							))}
// 							YOUR CART TOTAL: ${calculatePrice()}
// 						</div>
// 					</Col>
// 				</Row>
// 			</div>
// 		</React.Fragment>
// 	);
// }

// export default KoompiProBuy;
