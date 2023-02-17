import "./ContactStyle.scss";
import { HomeOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Contact() {
  const { TextArea } = Input;
  return (
    <div className="body">
      <section className="slider">
        <div className="siler-list">
          <div className="slider-item-contact">
            <div className="container">
              <div className="slide-content">
                <div className="text">
                  <p className="text-title">
                    Have a question? Need help? Don't hesitate, drop us a line
                  </p>
                  <p className="sub-text">
                    We will get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="d-flex">
                <div className="icon-contact">
                  <HomeOutlined />
                </div>
                <div className="content-contact">
                  <b className="title-contact">HEADQUARTER</b>
                  <p className="text-contact">
                    5F, Intracom Building, 82 Dich Vong Hau street, Cau Giay,
                    Hanoi, Vietnam
                  </p>
                  <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:brian@deha-soft.com">brian@deha-soft.com</a>
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-contact">
                  <MailOutlined />
                </div>
                <div className="content-contact">
                  <b className="title-contact">Thua Thien Hue, Vietnam</b>
                  <p className="text-contact">
                    28 Nguyen Tri Phuong, Phu Nhuan, Thua Thien Hue, Vietnam
                  </p>
                  <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:phuclt@deha-soft.com">
                      phuclt@deha-soft.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-contact">
                  <MailOutlined />
                </div>
                <div className="content-contact">
                  <b className="title-contact">Tokyo, JAPAN</b>
                  <p className="text-contact">
                    104-0045, 4F, CUBE TSUKIJI, 3-7-11 Tsukiji, Chuo-ward, Tokyo
                  </p>
                  <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:trang@deha-soft.com">trang@deha-soft.com</a>
                  </p>
                  <a href="https://deha.co.jp">https://deha.co.jp</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-contact">
                <Form
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="This question is about:"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please Choses question!",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="1">Bugs/Issues</Select.Option>
                      <Select.Option value="2">
                        Request a quotation
                      </Select.Option>
                      <Select.Option value="3">
                        Pather/Agency reqistration request
                      </Select.Option>
                      <Select.Option value="4">
                        Online meeting request
                      </Select.Option>
                      <Select.Option value="5">
                        Offline meeting request
                      </Select.Option>
                      <Select.Option value="6">Others</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Your Names"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Your Email Address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Your Company Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Explain your needs in details">
                    <TextArea rows={6} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        marginLeft: "180px",
                        // marginTop: "30px",
                      }}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;