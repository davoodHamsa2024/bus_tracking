import { Row, Col, Container } from "react-bootstrap";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function LoginScreen() {
  const navigate = useNavigate();
  interface LoginFormValues {
    email: string;
    password: string;
  }
  const onFinish = async (values: LoginFormValues) => {
    const { email, password } = values;

    if (email === "test@gmail.com" && password === "test123") {
      notification.success({ message: "Successfully logged in" });
      navigate("/Dashboard");
    } else {
      notification.error({ message: "Incorrect email or password!" });
    }
  };

  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col md={6}>
          <Container>
            <div className="frst-text">
              <h3>Welcome</h3>
              <h4>Bus Tracking Dashboard</h4>
            </div>

            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
            >
              <div className="test">
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "The input is not a valid E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Enter email" size="large" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password placeholder="Enter password" size="large" />
                </Form.Item>

                <Form.Item>
                  <Button
                    className="login-btn"
                    htmlType="submit"
                    size="large"
                    block
                  >
                    Login
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
