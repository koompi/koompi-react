import React, { useState } from "react"
import { Menu, Affix, Button } from "antd"

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
            onClick={() => window.scrollTo(0, 0)}
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
              <a
                href="https://repo.pionux.org/iso/x86_64/koompi-os-v2.1.3-x86_64.iso"
                download={true}
              >
                <Button className="downloadBtn">Download</Button>
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </Affix>
    </div>
  )
}

export default SubNavbar
