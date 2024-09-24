import React from "react";
import { Layout } from "antd";
import Index from "../../Components/Header/Index";
import IFooter from "../../Components/Footer/Index";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 80,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "4B49AC",
  };
  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",

  };
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "gray",
  };
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: "100vh",
    lineHeight: "120px",
    color: "black",
    backgroundColor: "white",
  };
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#0a1549",
  };
  const navigate = useNavigate();
  const goToform = () => {
 
    navigate('/Form'); 
};
  return (
    <>
      <Layout style={layoutStyle}>
      
        <Index title={"HOME"} title2={"LOGOUT"} title3={"USER DASHBOARD"} />
        <br/>
        <br/>
    

        <Layout>
          <Sider width="20%" style={siderStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <div onClick={goToform}>test</div>
              <div>icon</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <div>test</div>
              <div>icon</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
              }}
            >
              <div>test</div>
              <div>icon</div>
            </div>
          </Sider>
          <Content style={contentStyle}>
            <div>step1</div>
          </Content>
        </Layout>
        {/* <Footer style={footerStyle}>Footer</Footer> */}
        <br/>
        <br/>
        <IFooter />
      </Layout>
    </>
  );
};

export default Dashboard;
