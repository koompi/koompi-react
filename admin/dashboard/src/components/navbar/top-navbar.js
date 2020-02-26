import React, { useContext } from "react"
import { Layout, Popover } from "antd"
import { useQuery } from "@apollo/react-hooks"
import { UserContext } from "../../context/userContext"
import { Link } from "react-router-dom"
import { GET_USER } from "../../graphql/query"

const { Header } = Layout

function TopNavbar() {
  const userContext = useContext(UserContext)
  const { email } = userContext.user
  const content = (
    <div>
      <Link to="/admin/user/settings">Settings</Link>
      <p>
        <a href="/logout">Logout</a>
      </p>
    </div>
  )

  const DisplayUser = () => {
    const { error, loading, data } = useQuery(GET_USER, {
      variables: { email }
    })
    if (error) console.log(error)
    if (loading) return "Loading ..."
    if (data) {
      const { fullname, avatar, email } = data.user
      return (
        <Popover
          placement="bottomRight"
          title={
            <div>
              <div>
                <b>{fullname}</b>
              </div>
              <p>{email}</p>
            </div>
          }
          content={content}
        >
          <img
            src={`https://admin.koompi.com` + avatar}
            alt={fullname}
            className="avatar"
          />
        </Popover>
      )
    }
  }

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <DisplayUser />
    </Header>
  )
}

export default TopNavbar
