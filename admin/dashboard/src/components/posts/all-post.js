import React from "react"
import { Layout, message, Table, Divider, Tag, Popconfirm } from "antd"
import TopNavbar from "../navbar/top-navbar"
import LeftNavbar from "../navbar/left-navbar"
import PageFooter from "../footer"
import moment from "moment"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { Link } from "react-router-dom"

// ===== Query and Mutation Section =====
import { GET_POSTS } from "../../graphql/query"
import { DELETE_POST } from "../../graphql/mutation"

const { Content } = Layout

function AllPosts() {
  // ===== Mutation Varile Section =====
  const [deletePost] = useMutation(DELETE_POST)
  const { refetch: postRefetch } = useQuery(GET_POSTS)

  const columns = [
    {
      title: "Image",
      dataIndex: "image"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Author",
      dataIndex: "created_by",
      key: "created_by"
    },
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at"
    },

    {
      title: "Actions",
      dataIndex: "action"
    }
  ]

  const DisplayPost = () => {
    const { error, loading, data } = useQuery(GET_POSTS)
    if (error) console.log(error)
    if (loading) return <Table loading={true}></Table>
    if (data) {
      const DisplayTable = () => {
        return (
          <Table
            columns={columns}
            dataSource={data.posts.map((post) => {
              const { id, title, category, created_at, user, slug } = post
              return {
                key: id,
                image: (
                  <img
                    src={"https://admin.koompi.com" + post.thumnail}
                    alt="post"
                    height="40px"
                    width="60px"
                  />
                ),
                title: title.length <= 25 ? title : title.substring(0, 25) + " ...",
                slug: slug.length <= 25 ? slug : slug.substring(0, 25) + " ...",
                category: (
                  <Tag color="green">
                    {category === null ? "No category" : category.title}
                  </Tag>
                ),

                created_by: user === null ? "Null" : user.fullname,
                created_at: moment.unix(created_at / 1000).format("YYYY-MM-DD"),
                action: (
                  <div>
                    <Link to={`/admin/post/edit/${id}`}>
                      <Tag className="btn" color="#2db7f5">
                        Edit
                      </Tag>
                    </Link>
                    <Divider type="vertical" />
                    <Popconfirm
                      placement="topRight"
                      title="Are you sure to delete this Post?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => {
                        deletePost({ variables: { id: `${id}` } })
                          .then(async (res) => {
                            await message.success(res.data.delete_post.message)
                            await postRefetch()
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
                )
              }
            })}
            pagination={true}
          />
        )
      }
      return (
        <div>
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
              <h1 className="title_new_post">All Posts</h1>
              <DisplayPost />
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  )
}

export default AllPosts
