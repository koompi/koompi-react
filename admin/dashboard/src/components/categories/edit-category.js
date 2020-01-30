import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import LeftNavbar from "../navbar/left-navbar";
import TopNavbar from "../navbar/top-navbar";
import PageFooter from "../footer";
import { UserContext } from "../../context/userContext";
import three_dots from "../../assets/img/three-dots.svg";
import slugify from "slugify";

// ===== Query Section =====
import { EDIT_CATEGORY } from "../../graphql/query";

// ===== Mutation Section =====
import { UPDATE_CATEGORY } from "../../graphql/mutation";

// ===== Antd Section =====
import { Form, Input, Button, Row, Col, Layout, message } from "antd";

const FormItem = Form.Item;
const { Content } = Layout;

function EditCategory(props) {
  const { getFieldDecorator } = props.form;
  // ===== State Management =====
  const [loading, setLoading] = useState(false);
  const userData = useContext(UserContext);
  const [updateCategory] = useMutation(UPDATE_CATEGORY);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        updateCategory({
          variables: {
            id: window.location.pathname.split("/")[4],
            ...values,
            slug: slugify(values.title, { lower: true })
          }
        })
          .then(async () => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 3000);
            await message.success("The Category update successfully.", 3);
            await props.history.push("/admin/categories");
          })
          .catch(error => {
            message.error(error);
          });
      }
    });
  };

  const {
    error: edit_category_error,
    loading: edit_category_loading,
    data: edit_category_data
  } = useQuery(EDIT_CATEGORY, {
    variables: { id: window.location.pathname.split("/")[4] }
  });

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* =========Left Navbar ======= */}
      <LeftNavbar />
      <Layout>
        {/* =========Top Navbar ======= */}
        <TopNavbar />

        <Content style={{ margin: "20px 16px" }}>
          {/* ======= Display content ====== */}
          <div className="koompi container">
            <div className="background_container">
              <h1 className="title_new_post">
                {edit_category_loading
                  ? "loading ..."
                  : "Update" + " " + edit_category_data.category.title}
              </h1>
              <Form className="login-form" onSubmit={handleSubmit}>
                <Row gutter={[16, 16]}>
                  <Col span={16}>
                    <FormItem>
                      {getFieldDecorator("title", {
                        initialValue: edit_category_loading
                          ? "loading ..."
                          : edit_category_data.category.title
                      })(<Input size="large" />)}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator("updated_at", {
                        rules: [
                          {
                            required: true,
                            message: "The title is required"
                          }
                        ],
                        initialValue: new Date().toISOString()
                      })(<Input style={{ display: "none" }} size="large" />)}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    <FormItem>
                      {getFieldDecorator("updated_by", {
                        initialValue: userData.user.fullname,
                        rules: [
                          {
                            required: true,
                            message: "User name  is required"
                          }
                        ]
                      })(<Input size="large" disabled />)}
                    </FormItem>
                  </Col>
                  <Col span={4}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="btnSubmit"
                      disabled={loading ? true : false}
                    >
                      {loading ? (
                        <img src={three_dots} alt="btn-loading" height="10" />
                      ) : (
                        "Update"
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout>
  );
}

export default Form.create()(EditCategory);
