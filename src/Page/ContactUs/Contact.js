import "./ContactStyle.scss";
import { HomeOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Contact() {
  const form = useRef();
  const onFinish = (values) => {
    const email = ["aveoglb@gmail.com", "luongtiendung1508@gmail.com"];
    const config = {
      // Username: "nguuyenminhhieu28801@gmail.com",
      // Password: "38DF21CEE95626703020DCE7BAED39DB2B2D",
      // Host: "smtp.elasticemail.com",
      SecureToken: "6e45cd3b-27cc-48fb-b0bc-82dda3b0e40f",
      Port: 2525,
      To: email,
      From: "technology.aveo@gmail.com",
      Subject: "Contact to You",
      Body: `Câu hỏi : ${values.question} , Tên : ${values.name} , Email: ${values.email} , Công ty: ${values.Company}, Chi Tiết Nhu Cầu: ${values.explain}`,
    };
    console.log("Success:", values);
    if (window.Email) {
      window.Email.send(config).then(() => alert("Send Email Success"));
    }
    form.current?.resetFields();
  };
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    // console.log(e);
    emailjs
      .sendForm(
        "service_vi51xno",
        "template_m4ckfww",
        form.current,
        "YZ8xiTtd6QFPRd9qAw"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const { TextArea } = Input;
  useEffect(() => {
    document.title =
      "AVEO Global - Leading Software Development Company in Vietnam";
  }, []);
  return (
    <div className="contact">
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
                    4F - No 9 Building, 9 Ha Dinh, Thanh Xuan, Hanoi, Vietnam
                  </p>
                  <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:sales@aveo-global.com">sales@aveo-global.com</a>
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
                    5-21-5 Higashisuna, Koutouku, Tokyo-Japan
                  </p>
                  <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:luyennk@aveo-global.com">luyennk@aveo-global.com</a>
                  </p>
                  {/* <a href="https://deha.co.jp">https://deha.co.jp</a> */}
                </div>
              </div>
              <div className="d-flex">
                <div className="icon-contact">
                  <MailOutlined />
                </div>
                <div className="content-contact">
                  <b className="title-contact">Singapore</b>
                  <p className="text-contact">Coming Soon</p>
                  {/* <p className="contact-email">
                    Contact:{" "}
                    <a href="mailto:phuclt@deha-soft.com">
                      phuclt@deha-soft.com
                    </a>
                  </p> */}
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
                  ref={form}
                >
                  <Form.Item
                    label="This question is about:"
                    name="question"
                    rules={[
                      {
                        required: true,
                        message: "Please Choses question!",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="Bugs/Issues">
                        Bugs/Issues
                      </Select.Option>
                      <Select.Option value="Request a quotation">
                        Request a quotation
                      </Select.Option>
                      <Select.Option value=" Pather/Agency reqistration request">
                        Pather/Agency reqistration request
                      </Select.Option>
                      <Select.Option value=" Online meeting request">
                        Online meeting request
                      </Select.Option>
                      <Select.Option value="Offline meeting request">
                        Offline meeting request
                      </Select.Option>
                      <Select.Option value="Others">Others</Select.Option>
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
                    name="Company"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Explain your needs in details"
                    name="explain"
                  >
                    <TextArea rows={6} />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn-submit"
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
