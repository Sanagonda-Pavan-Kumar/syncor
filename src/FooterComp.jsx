import React from "react";
import Synlo from "./assets/Syncorlogo.png";
import { Footer } from "antd/es/layout/layout";
import { LinkedinOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
export const FooterComp = () => {
  return (
    <div>
      <Footer
        style={{
          bottom: 0,

          right: 0,
          background: "rgb(41, 28, 28,0.8)",
          color: "white",
          width: "100%",
          boxSizing: "border-box",
          margin: 0,
          marginTop: "20px",
          padding: "20px ",
          textAlign: "center",
          overflowX: "hidden",
        }}
      >
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={8}>
            <img
              src={Synlo}
              style={{
                width: "160px",
                height: "50px",
                justifyContent: "flex-start",
              }}
              alt="Logo"
            ></img>
            <p
              style={{
                fontStyle: " proximaNova, sans-serif",
                color: "rgb(242, 236, 236)",
                textShadow: "rgb(7, 1,1, 0.5)",
                fontSize: "18px",
              }}
            >
              We are an Emerging Technology Solutions Company{" "}
            </p>
          </Col>
          <Col xs={24} md={8}>
            <h1>Quick Links</h1>
            <Link to="/aboutusComp">
              <p
                style={{
                  fontStyle: " proximaNova, sans-serif",
                  color: "rgb(197, 185, 185)",
                  textShadow: "rgb(7, 1,1, 0.5)",
                  fontSize: "18px",
                }}
              >
                {" "}
                AboutUs
              </p>
            </Link>
            <Link to =''>
              <p
                style={{
                  fontStyle: " proximaNova, sans-serif",
                  color: "rgb(197, 185, 185)",
                  textShadow: "rgb(7, 1,1, 0.5)",
                  fontSize: "18px",
                }}
              >
                Technology
              </p>
            </Link>
            <Link>
              <p
                style={{
                  fontStyle: " proximaNova, sans-serif",
                  color: "rgb(197, 185, 185)",
                  textShadow: "rgb(7, 1,1, 0.5)",
                  fontSize: "18px",
                }}
              >
                Services
              </p>
            </Link>
            <Link>
              <p
                style={{
                  fontStyle: " proximaNova, sans-serif",
                  color: "rgb(197, 185, 185)",
                  textShadow: "rgb(7, 1,1, 0.5)",
                  fontSize: "18px",
                }}
              >
                ContactUs
              </p>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <h1>Talk with Us</h1>
            <p
              style={{
                fontStyle: " proximaNova, sans-serif",
                color: "rgb(197, 185, 185)",
                textShadow: "rgb(7, 1,1, 0.5)",
                fontSize: "18px",
              }}
            >
              +91 9390910373
            </p>
            <p
              style={{
                fontStyle: " proximaNova, sans-serif",
                color: "rgb(197, 185, 185)",
                textShadow: "rgb(7, 1,1, 0.5)",
                fontSize: "18px",
              }}
            >
              <a href="mailto:info@syncorsol.com" target="_blank" style={{color: "rgb(197, 185, 185)",}}>
              info@syncorsol.com
              </a>
              
            </p>
            <p
              style={{
                fontStyle: " proximaNova, sans-serif",
                color: "rgb(197, 185, 185)",
                textShadow: "rgb(7, 1,1, 0.5)",
                fontSize: "18px",
              }}
            >
              www.syncorsol.com
            </p>
          </Col>
          <Col xs={24} md={4}>
            <div style={{ alignItems: "center" }}>
              <a
                href="https://www.linkedin.com/company/syncorsolutions/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined
                  style={{ fontSize: "30px", color: "white" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};
