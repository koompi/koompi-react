import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Members from "../src/components/states/member"

Enzyme.configure({ adapter: new Adapter() })

describe(" Members component ", () => {
  test("renders", () => {
    const wrapper = shallow(<Members />)
    expect(wrapper.exists()).toBe(true)
  })
})
