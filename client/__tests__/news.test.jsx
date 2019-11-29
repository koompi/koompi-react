import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import News from "../src/components/news"

Enzyme.configure({ adapter: new Adapter() })

describe(" News component ", () => {
  test("renders", () => {
    const wrapper = shallow(<News />)
    expect(wrapper.exists()).toBe(true)
  })
})
