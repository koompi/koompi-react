import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Index from "../src/components/index"

Enzyme.configure({ adapter: new Adapter() })

describe(" Index component ", () => {
  test("renders", () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.exists()).toBe(true)
  })
})
