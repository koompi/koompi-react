import React, { useState } from "react"
import { Menu, Affix, Button, BackTop } from "antd"

function SubNavbar({ title }) {
  const [sticky, setSticky] = useState(false)

  return (
    <div>
      <Affix offsetTop={0} onChange={(affixed) => setSticky(affixed)}>
        <div
          className={sticky ? "subNavbarPosition sticky" : "subNavbarPosition"}
          style={{ background: "white" }}
        >
          <Menu
            style={{ borderBottom: "none" }}
            className="container"
            theme="white"
            mode="horizontal"
          >
            {sticky ? (
              <Menu.Item>
                <h2 className="subnavbar-logo">{title}</h2>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <h2 className="subnavbar-logo">{title}</h2>
              </Menu.Item>
            )}
            <Menu.Item className="sub-navbar-a">
              <Button className="downloadBtn">Download</Button>
            </Menu.Item>
          </Menu>
        </div>
      </Affix>
    </div>
  )
}

export default SubNavbar
