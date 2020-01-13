import React, { useState, useContext } from "react";
import Navbar from "../Navbar";
import { Row, Col, Layout } from "antd";
import { Typography, Divider } from "antd";
import { Modal, Button } from "antd";
import { Icon, Badge } from "antd";

import { CartContext } from "../../CartContext";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

function KoompiProBuy(props) {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = async () => {
    const koompiProducts = {
      id: 4,
      image: "",
      name: "KOOMPI PRO",
      price: parseFloat(369.0)
    };
    await setCart(currentState => [...currentState, koompiProducts]);
    window.localStorage.setItem(
      "koompi",
      JSON.stringify([...cart, koompiProducts])
    );
  };

  console.log(cart);

  const database = [
    {
      id: 1,
      title: "KOOMPI PRO",
      price: 369
    },
    {
      id: 2,
      title: "KOOMPI E",
      price: 500
    }
  ];
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div>
          <Content style={{ paddingTop: "100px" }}>
            <Row>
              {database.map(data => {
                return (
                  <>
                    <Col sm={12}>
                      <div className="container" key={data.id}>
                        <h2>{data.title}</h2>
                        <h3>{data.price}</h3>
                        <Button onClick={addToCart}>Add to cart</Button>
                      </div>
                    </Col>
                  </>
                );
              })}
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
