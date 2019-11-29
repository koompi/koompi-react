import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Retailers from "../src/components/retailer"

Enzyme.configure({ adapter: new Adapter() })

describe(" Retailers component ", () => {
  test("renders", () => {
    const wrapper = shallow(<Retailers />)
    expect(wrapper.exists()).toBe(true)
  })
})
