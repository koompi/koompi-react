import React, { useState } from "react"
import { Layout, message, Table, Divider, Modal, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import parse from "html-react-parser"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_SOCIAL_MEDIA } from "../../graphql/query"
import { DELETE_SOCIAL_MEDIA } from "../../graphql/mutation"

const { Content } = Layout

function SocialMedia() {
  // ===== State Management =====
  const [visible, setVisible] = useState(false)

  // ===== Mutation Varile Section =====
  const [deleteSocialMedia] = useMutation(DELETE_SOCIAL_MEDIA)
  const { refetch: refetchSocialMedia } = useQuery(GET_SOCIAL_MEDIA)

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "Author",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
    },

    {
      title: "Actions",
      dataIndex: "action",
    },
  ]

  const hideModal = () => {
    setVisible(false)
  }

  const DisplaySocailMedia = () => {
    const { error, loading, data, refetch } = useQuery(GET_SOCIAL_MEDIA)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      refetch()
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.socialMedia.map((socialMedia) => {
              const { id, name, created_by, link, logo, created_at } = socialMedia
              return {
                key: parse(name),
                logo: (
                  <img
                    src={`https://admin-demo.koompi.com${logo}`}
                    alt={name}
                    height="40px"
                    width="40px"
                  />
                ),
                name,
                link,
                created_by,
                created_at: moment
                  .unix(created_at / 1000)
                  .format("YYYY-MM-DD HH:mm:ss"),
                action: (
                  <div>
                    <Link to={`/admin/social-media/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title={`Are you sure to delete ${name}?`}
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deleteSocialMedia({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(
                              res.data.delete_social_media.message
                            )
                            await refetchSocialMedia()
                          })
                          .catch((error) => {
                            console.log(error)
                            return null
                          })
                      }}
                    >
                      <Tag color="#f50" className="btn">
                        Delete
                      </Tag>
                    </Popconfirm>
                  </div>
                ),
              }
            })}
            pagination={visible ? false : true}
          />
        )
      }
      return (
        <div>
          <Modal
            title={"Details Informtion"}
            visible={visible}
            onOk={hideModal}
            onCancel={hideModal}
            footer={null}
            width="98%"
          >
            <DisplayTable />
          </Modal>
          <DisplayTable />
        </div>
      )
    }
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        <Content>
          {/* =========Top Navbar ======= */}
          <TopNavbar />

          <div className="koompi container">
            {/* ======= Display content ====== */}

            <div className="background_container">
              <h1 className="title_new_post">Social Media</h1>
              <DisplaySocailMedia />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default SocialMedia
