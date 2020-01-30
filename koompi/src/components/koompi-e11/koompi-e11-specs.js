import React from 'react';
import { Row, Col, Collapse, Icon } from 'antd';
import Navbar from '../navbar';
import subNavbarE11 from './subNavbar';

const { Panel } = Collapse;

const data = [
  {
    id: 1,
    title: 'Processor',
    desc: 'Intel® Core™ i7 7500U Processor'
  },
  {
    id: 2,
    title: 'Operating System',
    desc: 'KOOMPI OS'
  },
  {
    id: 3,
    title: 'Memory',
    desc: 'up to 16 GB SDRAM(Optional)'
  },
  {
    id: 4,
    title: 'Display',
    desc: 'FHD-Anti-Glare'
  },
  {
    id: 5,
    title: 'Graphic',
    desc: 'NVIDIA® GeForce® MX150 , with 2GB GDDR5 VRAM'
  },
  {
    id: 6,
    title: 'Keyboard',
    desc: '256SSD SATA 3.0 M.2 SSD'
  },
  {
    id: 7,
    title: 'Storage',
    desc: 'Chiclet keyboardIlluminated chiclet keyboard(On selected models)'
  },
  {
    id: 8,
    title: 'WebCam',
    desc: 'VGAWebcam'
  },
  {
    id: 9,
    title: 'Audio',
    desc: 'Built-in 2 W Stereo Speaker with Microphone'
  },
  {
    id: 10,
    title: 'Battery',
    desc: '3 -Cell 42 Wh Battery'
  },
  {
    id: 11,
    title: 'Weight',
    desc: '1.5 kg ~ 1.7 kg with battery'
  },
  {
    id: 12,
    title: 'Security',
    desc: 'BIOS user password protection HDD user password protection'
  }
];
function Koompi_E_Spec() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const customPanelStyle = {
    borderRadius: 0,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden'
  };
  return (
    <div>
      <Navbar />
      <subNavbarE11 />
      <div className="spec-background">
        <div className="container">
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <Icon type="caret-right" rotate={isActive ? 90 : 0} />
            )}
          >
            {data.map(data => {
              return (
                <Panel header={data.title} key="1" style={customPanelStyle}>
                  <p style={{ marginBottom: '0px' }}>{data.desc}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Koompi_E_Spec;
