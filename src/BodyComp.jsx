import React from "react";
import backVid from "./assets/BackgroundVideo.mp4";
import Whovid from "./assets/W.mp4";
import ConnectNow1 from "./assets/connect1.jpeg";
import { Carousel, Col, Row } from "antd";
import i_img from "./assets/sunsoft_i.png";
import { Button } from "antd";
import { useState } from "react";
import "./bodycomp.css";
import ITstaffImg from "./assets/itstaffaug.jpg";
import ITTrainImg from "./assets/ittrain.jpg";
import ProjectManagementImg from "./assets/promgm.jpg";
import ManagedServicesImg from "./assets/mgdser.jpg";
import AppDevImg from "./assets/appdev.jpg";
import Home4 from "./assets/home4.jpg";
import Home5 from "./assets/home5.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppdevComp } from "./AppdevComp";  
import { Grid } from 'antd'; 
const { useBreakpoint } = Grid;
import { Card } from "antd";

import { FooterComp } from "./FooterComp";
const { Meta } = Card;

const contentStyle = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const BodyComp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const handleScrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
     <div>
  <video
    src={backVid}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: window.innerWidth <= 576 ? "100%" : "100%",
      objectFit: window.innerWidth <= 576 ? "90vh" : "cover",
      objectPosition: "center",
      zIndex: -1,
    }}
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      <div
        style={{
          marginTop: "100vh",
          padding: "1px",
          boxSizing: "border-box",
          paddingLeft: "50px",
          borderTop: "none",
          borderRightColor: "none",
          borderBottomColor: "none",
        }}
      >
        <Card
          style={{
            width: "60",
            height: "20%",
            paddingLeft: "40px",
            alignItems: "center",
          }}
        >
          <img src={i_img}></img>
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: "ProximaNova, sans-serif",
              fontSize: "30px",
            }}
          >
            Who 
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              fontFamily: "ProximaNova, sans-serif",
              fontSize: "30px",
            }}
          >
          We Are
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "rgb(77, 75, 75)",
              fontFamily: "ProximaNova, sans-serif",
            }}
          >
            "We are tech-optimists who believe that technology can not only
            change the way businesses do things , but also help them redefine
            themselves . It's with the vision we started Syncor Solutions in
            2018."
          </p>
          <br style={{ padding: "30px" }}></br>
          <Button
            type="primary"
            style={{
              background: "orange",
              padding: "30px 60px",
              textAlign: "center",
            }}
            onClick={() => navigate("/AboutUsComp")}
          >
            LEARN MORE
          </Button>
        </Card>
      </div>

   
      <Row style={{ marginBottom: 0, paddingBottom: 0 }}>
        <Col span={24}>
          <video
            src={Whovid}
            style={{
              position: "relative",
              top: 0,

     

              width: "100%",
              display: "block",
              height: "70vh",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1,
            }}
            autoPlay
            loop
            muted
            playsInline
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "70vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              objectFit: "cover",
              objectPosition: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "ProximaNova, sans-serif",
                paddingTop: "120px",
                paddingLeft: "100px",
                textAlign: "center",

                color: "rgb(210, 199, 199)",
                fontSize: "30px",
              }}
            >
              {" "}
              " WE are ,{" "}
            </h1>
            <Carousel
              autoplay={10}
              dots={false}
              style={{ zIndex: 1 }}
              effect="fade"
            >
              <div>
                <h1
                  style={{
                    paddingLeft: "100px",
                    textAlign: "center",
                    color: "rgb(210, 199, 199)",
                    fontSize: "30px",
                  }}
                >
                  Committed to your success. "
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    paddingLeft: "100px",
                    textAlign: "center",
                    color: "rgb(210, 199, 199)",
                    fontSize: "30px",
                  }}
                >
                  a TEAM u can Trust. "
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    paddingLeft: "100px",
                    textAlign: "center",
                    color: "rgb(210, 199, 199)",
                    fontSize: "30px",
                  }}
                >
                  Dedicated to Quality. "
                </h1>
              </div>
              <div>
                <h1
                  style={{
                    paddingLeft: "100px",
                    textAlign: "center",
                    color: "rgb(210, 199, 199)",
                    fontSize: "30px",
                  }}
                >
                  Committed to Excellence. "
                </h1>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: "0px" }}>
        <h1 style={{ textAlign: "center", paddingRight: "60px" }}>
          Our Services
        </h1>
        <Carousel arrows dots autoplay>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <div style={{ padding: "20px" }}>
              <Card
                hoverable
                style={{ width: '100%', height: '400px' }}
                cover={<img alt="example" src={ITstaffImg} height="160px" />}
              >
                <Meta
                  title="IT Staff Augmentation"
                  description="“With a global reach and a hyperlocal market expertise, we help you build IT teams across all tech stacks for diverse business goals.”"
                />
                <Button
                  type="primary"
                  style={{
                    marginTop: "55px",
                    backgroundColor: "rgb(242, 54, 70)",
                    width: "200px",
                  }}
                  onClick={() => (window.location.href = "/ITStaffAugComp")}
                >
                  Know More
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div style={{ padding: "20px" }}>
              <Card
                hoverable
                style={{ width: '100%', height: '400px' }}
                cover={<img alt="example" src={ITTrainImg} height="160px" />}
              >
                <Meta
                  title="IT Training"
                  description="“We provide corporate training in the emerging technologies that are transforming our economy. Our blended learning approach drives learner engagement and the industry’s highest completion rates.”"
                />
                <Button
                  type="primary"
                  style={{
                    marginTop: "18px",
                    backgroundColor: "rgb(242, 54, 70)",
                    width: "200px",
                  }}
                  onClick={() => (window.location.href = "/ITTrainingComp")}
                >
                  Know More
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div style={{ padding: "20px" }}>
              <Card
                hoverable
                style={{ width: '100%', height: '400px' }}
                cover={<img alt="example" src={ProjectManagementImg} height="160px" />}
              >
                <Meta
                  title="Project Management"
                  description="“We orchestrate project management solutions that drive efficiency, ensure project precision, and strategically align outcomes with visionary goals.”"
                />
                <Button
                  type="primary"
                  style={{
                    marginTop: "60px",
                    backgroundColor: "rgb(242, 54, 70)",
                    width: "200px",
                  }}
                  onClick={() => (window.location.href = "/ProjMgmComp")}
                >
                  Know More
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <div style={{ padding: "20px" }}>
              <Card
                hoverable
                style={{ width: '100%', height: '400px' }}
                cover={<img alt="example" src={ManagedServicesImg} height="160px" />}
              >
                <Meta
                  title="Managed Services"
                  description="“We help clients control costs and improve efficiency with managed services, allowing them to focus on core business operations seamlessly.”"
                />
                <Button
                  type="primary"
                  style={{
                    marginTop: "45px",
                    backgroundColor: "rgb(242, 54, 70)",
                    width: "200px",
                  }}
                  onClick={() => (window.location.href = "/ManagedServices")}
                >
                  Know More
                </Button>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div style={{ padding: "20px" }}>
              <Card
                hoverable
                style={{ width: '100%', height: '400px' }}
                cover={<img alt="example" src={AppDevImg} height="160px" />}
              >
                <Meta
                  title="Application Development Service"
                  description="“We provide comprehensive application development, maintenance, and IT staffing services, ensuring your business strategy aligns with evolving technology needs.”"
                />
                <Button
                  type="primary"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "rgb(242, 54, 70)",
                    width: "200px",
                  }}
                  onClick={() => (window.location.href = "/AppdevComp")}
                >
                  Know More
                </Button>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
      </div>

      <Row>
      <Col  span={12} xs={24} md={12}>
      <img
              src={Home4}
              style={{
                position: "relative",
               
                width: "100%",
                height:window.innerWidth <= 767 ? "70vh" : "100%",
                display: "block",
               
                objectFit: "cover",
                objectPosition: "center",
                zIndex: -1,
              }}
            ></img>
               <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height:window.innerWidth <= 767 ? "70vh" : "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: 0,
              }}
            ></div>
              <div
              style={{
                position: "absolute",
                top: "60%",
                left: "52%",
                transform: "translate(-50%, -50%)",
                color: " rgb(210, 199, 199) ",
               
                fontFamily: 'ProximaNova, sans-serif"',
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                zIndex: 1,
              }}
            >
              <h1 style={{
      fontSize: "25px", 
      "@media (max-width: 560px)": {
        fontSize: "12px", 
       
      },
    }}>
                {" "}
                " Learn about our trusted partnership with worlds leading
                Technology providers."{" "}
              </h1>
            </div>

 
      </Col>
      <Col span={12} xs={24} md={12}>
      <div>
      <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleScrollToTop}
              >

        <h1    style={{
                   
                   paddingLeft: screens.xs ? '30px' : '110px',
                   paddingTop: screens.xs ? '20px' : '50px', 
                   paddingRight: screens.xs ? '30px' : '240px', 
              
                    color: " black ",
                    fontSize: "40px",
                    fontFamily: 'ProximaNova, sans-serif"',
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                    cursor: "pointer",

                    transition: "text-decoration 0.3s ease",
                  }}
 onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
             > 
          Our  Success Story{" "}

        </h1>
        <p
                  style={{
                  
                    paddingLeft: screens.xs ? '30px' : '110px',
                    paddingTop: screens.xs ? '20px' : '0px', 
                    paddingRight: screens.xs ? '30px' : '240px', 
                  
                  
                    color: " grey ",
                    fontSize: "20px",
                    fontFamily: 'ProximaNova, sans-serif"',

                    
                    cursor: "pointer",
                  }}
                
                >
                  {" "}
                  See How We are Solvig Problems & diving results for Our
                  Customers{" "}
                </p>
         </Link>

      </div>
      
      </Col>
    </Row>   

      <div style={{ marginTop: "40px" }}>
  <Row>
    <Col span={24}>
      <img
        src={ConnectNow1}
        style={{
          position: "relative",
          top: 23,
          left: 0,
          width: "100%",
          display: "block",
          height: "70vh",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: -1,
        }}
        alt="Connect Now"
      />
      <div
        style={{
          position: "absolute",
          top: 23,
          left: 0,
          width: "100%",
          height: "70vh",
          backgroundColor: "rgba(50, 52, 49, 0.8)", 
          zIndex: 0,
        }}
      ></div>
      <div
        className="slide-up-animation"
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
          transform: "translate(-50%,-50%)",
          color: "rgb(243, 239, 231)",
          fontFamily: 'ProximaNova, sans-serif"',
          zIndex: 1,
          fontSize: "19px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h2 className="responsive-text">
          Interested in our solutions?
          <br />
          Let's Start a Conversation.
        </h2>
        <div>
          <Button
            type="primary"
            style={{
              background: "orange",
              padding: "22px 100px",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
           <Link to="/ContactUsComp" style={{ color: "white", textDecoration: "none" }}>
    CONNECT NOW
  </Link>
          </Button>
        </div>
      </div>
    </Col>
  </Row>

 
  <style>
    {`
      @media (max-width: 599px) {
        .responsive-text {
          font-size: 20px; /* Reduce font size for mobile view */
        }

        .slide-up-animation h2 {
          text-align: center; /* Adjust alignment if needed */
        }
         
      }
    `}
  </style>
</div>

      <div style={{marginTop:'50px'}}>
        <FooterComp />
      </div>
    </div>
  );
};
