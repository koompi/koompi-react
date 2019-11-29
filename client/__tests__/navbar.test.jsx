import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Navbar from "../src/components/navbar"

Enzyme.configure({ adapter: new Adapter() })

describe(" Navbar component ", () => {
  test("renders", () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.exists()).toBe(true)
  })
})
