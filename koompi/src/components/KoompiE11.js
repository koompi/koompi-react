import React from 'react';
import { Tabs } from 'antd';
import Navbar from './Navbar';

const { TabPane } = Tabs;
function KoompiE11() {
	function callback(key) {
		console.log(key);
	}
	return (
		<div>
			<Navbar />
			<div className='background-color'>
				<div className='text-container'>
					<Tabs defaultActiveKey='1' onChange={callback}>
						<TabPane tab='Overview' key='1'>
							<center>
								<h1>KOOMPI E11</h1>
								<h2 className='subTittle-E11'>
									With great power <br></br> comes great
									capability.
								</h2>
								<img src='/img/laptop1.png'></img>
							</center>
							<div>
								<h1>PERFORMANCE</h1>
								<p>
									KOOMPI Pro elevates the notebook to a whole
									new level of performance and portability.
									Wherever your ideas take you, you’ll get
									there faster than ever with high‑performance
									processors and memory, advanced graphics,
									blazing‑fast storage, and more — all in a
									compact 3-pound package.
								</p>
								<center>
									<img src='/img/laptop1.png'></img>
								</center>
								<Tabs
									className='disciption-tab'
									defaultActiveKey='1'
									onChange={callback}>
									<TabPane tab='Coding' key='1'>
										Content of Tab Pane 1
									</TabPane>
									<TabPane tab='Video' key='2'>
										Content of Tab Pane 2
									</TabPane>
									<TabPane tab='Internet' key='3'>
										Content of Tab Pane 3
									</TabPane>
								</Tabs>
							</div>
						</TabPane>
						<TabPane tab='Spec' key='2'>
							Content of Tab Pane 2
						</TabPane>
						{/* <TabPane tab='Tab 3' key='3'>
					Content of Tab Pane 3
				</TabPane> */}
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export default KoompiE11;
