import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from "react"
import Form from "../src/components/useForm"

Enzyme.configure({ adapter: new Adapter() })

describe(" Form component ", () => {
  test("renders", () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.exists()).toBe(true)
  })
})
