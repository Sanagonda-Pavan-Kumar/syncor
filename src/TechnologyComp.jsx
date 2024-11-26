import { useState } from "react";
import { Typography, Grid, Box, Paper } from "@mui/material";
import Tech1Img from "./assets/ourtechfinal.jpg";
import React from "react";
import { Header } from "./Header";
import Tech2App from "./assets/tech2.jpg";
import AppPng1 from "./assets/apppng1.png";
import AppPng2 from "./assets/apppng2.png";
import AppPng3 from "./assets/apppng3.png";
import AppPng4 from "./assets/apppng4.png";
import AppPng5 from "./assets/apppng5.png";
import AppPng6 from "./assets/apppng6.png";
import AppPng7 from "./assets/apppng7.png";
import AppPng8 from "./assets/apppng8.png";
import Projmgmpng from "./assets/projmgm.png";
import Techwritepng from "./assets/techwrite.png";
import TechTrainpng from "./assets/techtrain.png";
import BSApng from "./assets/bussys.png";
import scopeMgmpng from "./assets/scopemgm.png";
import stakeholpng from "./assets/stakehol.png";
import { Footer } from "antd/es/layout/layout";
import { FooterComp } from "./FooterComp";
import Shared1Img from "./assets/shared1.jpg";
import EmergeTech from "./assets/EmergeTech1.jpg";
import TechArch from "./assets/architecture.jpg";
import Comm1Img from "./assets/communicationimg1.jpg";
import ConBankImg from "./assets/conbank.jpg";
import Grailpng from "./assets/grailspng.png";
import hadooppng from "./assets/hadooppng.png";
import haskellpng from "./assets/haskellpng.png";
import Hbasepng from "./assets/hbasepng.png";
import MongoDBpng from "./assets/mongoDBpng.png";
import Mulepng from "./assets/mulepng.png";
import Rprogpng from "./assets/Rprogpng.png";
import RavenDBpng from "./assets/ravendbpng.png";
import Scalapng from "./assets/scalapng.png";
export const TechnologyComp = () => {
  const [selectedTech, setSelectedTech] = useState("Application Development");

  const handleClick = (tech) => {
    setSelectedTech(tech);
  };

  const getContent = () => {
    switch (selectedTech) {
      case "Application Development":
        return (
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                Application Development
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “End-to-end development of financial applications that address
                pain points of customers and improve the value of your
                business.”
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box height={"100%"} position="relative">
                <Box
                  component="img"
                  src={Tech2App}
                  alt="img"
                  width={"80%"}
                  height={"80%"}
                  mt={6}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                pt={12}
                variant="h5"
                fontFamily={"ProximaNova, sans-serif"}
                fontWeight={"bold"}
                lineHeight={2}
                sx={{
                  px: { xs: 1, sm: 4, md: 8 },
                }}
              >
                We develop software applications that address the unique pain
                points in the financial services industry.
              </Typography>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                color="grey"
                lineHeight={2}
                pt={3}
                variant="body1"
                sx={{
                  px: { xs: 1, sm: 4, md: 8 },
                }}
              >
                Our team of specialized IT professionals with a wide range of
                technical skills will help you with the full cycle of
                application development. This includes critical stages like
                planning, design, building the tool, testing, deployment and
                ongoing support.
              </Typography>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                color="grey"
                lineHeight={2}
                pt={2}
                variant="body1"
                sx={{
                  px: { xs: 1, sm: 4, md: 8 },
                }}
              >
                We are an emerging technology solutions company who specialize
                in providing comprehensive services to businesses and startups
                in Fintech and Regtech.
              </Typography>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                color="grey"
                lineHeight={2}
                pt={2}
                variant="body1"
                sx={{
                  px: { xs: 1, sm: 4, md: 8 },
                }}
              >
                We have helped companies of different scales and market
                geographies with a wide range of solutions, from product
                development and roadmapping to process outsourcing and employee
                upskilling.
              </Typography>
            </Grid>
            <Grid sx={{ backgroundColor: "lightgrey" }}>
              <Typography variant="h3" fontWeight={"bold"} px={10} pt={5}>
                Key Skills & Expertise:
              </Typography>
              <Grid container  px={10} pb={2} sx={{
    px: { xs: 0, md: 10 }, 
  }} pt={5} >
                <Grid item display="flex" xs={4}  sx={{
    px: { xs: 4, md: 10 }, 
  }}>
                  <img src={AppPng1} width={35} height={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Applications Programming
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4}>
                  <img src={AppPng2} width={35} height={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Web Development
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4}  sx={{
    px: { xs: 4, md: 10 }, 
    pt:{xs:10,md:0},
  }}>
                  <img src={AppPng3} width={35} height={40}></img>
                  <Typography
                    variant="body1"
                    pt={1.2}
                    px={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    System Analysis
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng4} width={35} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Database Administration
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={10}  sx={{
    px: { xs: 4, md: 10 }, 
  }}>
                  <img src={AppPng5} width={50} height={40}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    QA/SW Testing
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={8}>
                  <img src={AppPng6} width={50} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Mobile Application Development
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}  sx={{
    px: { xs: 4, md: 10 }, 
  }}>
                  <img src={AppPng8} width={35} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Release Management
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10} >
                  <img src={AppPng7} width={35} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Configuration Management
                  </Typography>
                </Grid>
              </Grid>
              <hr></hr>
              <Typography
                variant="body1"
                px={22}
                fontFamily={"ProximaNova, sans-serif"}
                pt={2}
              >
                Support for: .NET, Java, C#, C++, J2EE, Visual Basic, SAP,
                Oracle, PeopleSoft, JD Edwards, All phases of the SDLC
              </Typography>
            </Grid>
          </Grid>
        );
      case "PMO & Shared Services":
        return (
          <Grid container xs={12} >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 6, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                PMO & Shared Services
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “Shared PMO services for all your diverse fintech and regtech
                needs with emphasis on seamless planning and execution.”
              </Typography>
            </Grid>
            <Grid container spacing={2} pt={4}>
              <Grid item xs={12} md={6}>
                <Box height={"100%"} position="relative">
                  <Box
                    component="img"
                    src={Shared1Img}
                    alt="img"
                    width={"80%"}
                    height={"80%"}
                    mt={6}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  pt={8}
                  variant="h5"
                  fontFamily={"ProximaNova, sans-serif"}
                  fontWeight={"bold"}
                  lineHeight={2}
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Developing technology for financial and ancillary industries
                  usually involves the use of shared services.
                </Typography>

                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Delivering such projects in a timely manner requires strong
                  project management acumen. Our panel of experienced project
                  managers execute elaborate enterprise-level fintech projects
                  with special focus on critical elements like scope management,
                  stakeholder expectations, cost benefit analysis and
                  participants and accountability.
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ backgroundColor: "lightblue" }}>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                sx={{
                  px: { xs: 6, sm: 8, md: 10 },
                }}
                pt={5}
              >
                Key Skills & Expertise:
              </Typography>
              <Grid container pt={10}  pb={2} sx={{ px: { xs: 2, md: 10 },}}>
                <Grid item  display="flex" xs={4} sx={{ px: { xs: 2, md: 10 },}} >
                  <img src={Projmgmpng} width={40} height={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Project Management
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} sx={{pt:{xs:0,md:1}}}>
                  <img src={Techwritepng} width={35} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Technical Writing
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} sx={{ px: { xs: 2, md: 10 },pt:{xs:5,md:0}}}  >
                  <img src={TechTrainpng} width={35} height={40} ></img>
                  <Typography
                    variant="body1"
                    pt={1.2}
                    px={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Technical Training
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4}  sx={{ px: { xs: 10, md: 10 },}} pt={5} >
                  <img src={BSApng} width={40} height={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Business Systems Analysis
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={5} sx={{ px: { xs: 2, md: 10 },}}  >
                  <img src={scopeMgmpng} width={50} height={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Scope Management
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={6}>
                  <img src={stakeholpng} width={40} height={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Stakeholder Management
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case "Emerging Technologies":
        return (
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 6, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                Emerging Technologies
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “Use emerging technologies to build forward-looking and secure
                systems and solutions for your customers and help you stay
                competitive.”
              </Typography>
            </Grid>
            <Grid container spacing={2} pt={4}>
              <Grid item xs={12} md={6}>
                <Box height={"100%"} position="relative">
                  <Box
                    component="img"
                    src={EmergeTech}
                    alt="img"
                    width={"80%"}
                    height={"80%"}
                    mt={6}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  pt={8}
                  variant="h5"
                  fontFamily={"ProximaNova, sans-serif"}
                  fontWeight={"bold"}
                  lineHeight={2}
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Fintech and Regtech have successfully leveraged emerging
                  technologies like big data, artificial intelligence,
                  blockchain, banking as a platform (BaaP) and open banking
                  APIs.
                </Typography>

                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  We work with emerging technologists who are proficient in
                  building tech stacks and digital architecture that support
                  your unique business needs and customer demands.
                </Typography>
                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  We also have some of the best securitization experts that help
                  you secure your systems and databases to industry standards.
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ backgroundColor: "lightgrey" ,px:{xs:0,md:10}}}>
              <Typography variant="h3" fontWeight={"bold"}  pt={5} sx={{px:{xs:5,md:10}}}>
                Key Skills & Expertise:
              </Typography>
              <Grid container pt={10}  pb={2} sx={{px:{xs:5,md:10}}}>
                <Grid item display="flex" xs={4} >
                  <img src={Grailpng} width={35} height={70}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Groovy and Grails
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4}>
                  <img src={hadooppng} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Hadoop
                  </Typography>
                </Grid>
                <Grid item display="flex" xs={4} sx={{px:{xs:0,md:10},pt:{xs:5,md:0}}}>
                  <img src={haskellpng} width={35}></img>
                  <Typography
                    variant="body1"
                    pt={1.2}
                    px={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Haskell
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={6} sx={{px:{md:0,xs:10}}} >
                  <img src={Hbasepng} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                    paddingTop={2}
                  >
                    HBase
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={6} sx={{px:{xs:0,md:10}}}>
                  <img src={MongoDBpng} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Mongo DB
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={6}>
                  <img src={Mulepng} width={50} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Mule
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={6} sx={{px:{xs:0,md:1}}}>
                  <img src={Rprogpng} width={50} height={40}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    R Programming Language
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={6}>
                  <img src={RavenDBpng} width={50} height={30}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Raven DB
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={4}>
                  <img src={Scalapng} width={50} height={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Scala
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case "Communications & Telephony":
        return (
          <Grid container xs={12} >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 6, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                Communications & Telephony
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “From transaction authentication to customer success and IVR
                setup, move your fintech telephony into our cloud with no
                capital expenditure.”
              </Typography>
            </Grid>
            <Grid container spacing={2} pt={4}>
              <Grid item xs={12} md={6}>
                <Box height={"100%"} position="relative">
                  <Box
                    component="img"
                    src={Comm1Img}
                    alt="img"
                    width={"80%"}
                    height={"80%"}
                    mt={6}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  pt={8}
                  variant="h5"
                  fontFamily={"ProximaNova, sans-serif"}
                  fontWeight={"bold"}
                  lineHeight={2}
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  With our cloud telephony infrastructure, you can put your
                  business communication in the cloud without having to build
                  any infrastructure or incur a huge CAPEX.
                </Typography>

                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  That means you can now build a call center for your financial
                  services in the cloud with bulk virtual numbers for your
                  several marketing and retention campaigns.
                </Typography>
                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Our cloud infrastructure affords the best security protocol
                  like OTP authentication for your customer’s financial
                  information. In addition you get scalability, automation
                  features, IVR call flows, analytics and CRM integration for
                  your business.
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ backgroundColor: "lightgrey" }}>
              <Typography variant="h3" fontWeight={"bold"}  pt={5} sx={{px:{xs:5,md:10}}}> 
                Key Skills & Expertise:
              </Typography>
              <Grid container pt={10}  pb={2} sx={{px:{xs:5,md:10}}}>
                <Grid item  display="flex" xs={4}>
                  <img src={AppPng1} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    NOC Support
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4}>
                  <img src={AppPng2} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Circuit Design
                  </Typography>
                </Grid>
                <Grid item display="flex" xs={4} sx={{px:{xs:0,md:10} ,pt:{xs:10,md:0}}}>
                  <img src={AppPng3} width={40} height={60}></img>
                  <Typography
                    variant="body1"
                  
                  px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Wireless/RFWireless/RF
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={10} sx={{px:{xs:10,md:0}}}>
                  <img src={AppPng4} width={35} height={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    PBX
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}  sx={{px:{xs:0,md:10}}}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Testing
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={8}>
                  <img src={AppPng6} width={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Field Engineering
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={8}>
                  <img src={AppPng6} width={50}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Transmission Engineering
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case "Technical Architecture":
        return (
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 6, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                Technical Architecture
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “Get a turnkey technical architecture that caters to the ever-
                evolving needs and demands of the financial ecosystem and
                customers.”
              </Typography>
            </Grid>
            <Grid container spacing={2} pt={4}>
              <Grid item xs={12} md={6}>
                <Box height={"100%"} position="relative">
                  <Box
                    component="img"
                    src={TechArch}
                    alt="img"
                    width={"80%"}
                    height={"80%"}
                    mt={6}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  pt={8}
                  variant="h5"
                  fontFamily={"ProximaNova, sans-serif"}
                  fontWeight={"bold"}
                  lineHeight={1.6}
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  The technical architecture is the design and documentation of
                  a software application. With financial services technology,
                  this protocol is the most critical as application development,
                  upgrades, device compatibility and encryption depends on this.
                </Typography>

                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Our team of technical architects builds an end-to-end
                  functional architecture, fully replete with details of
                  communication nexus, security, hardware and software that are
                  used by the application. Following this is a seamless handover
                  to the development team with continual support in case of
                  modifications and upgrades.
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ backgroundColor: "lightgrey" }}>
              <Typography variant="h3" fontWeight={"bold"}  pt={5}  sx={{px:{xs:5,md:10}}}>
                Key Skills & Expertise:
              </Typography>
              <Grid container pt={10}  pb={2} sx={{px:{xs:5,md:10}}}>
                <Grid item  display="flex" xs={4} sx={{px:{xs:0,md:10}}}>
                  <img src={AppPng1} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Business Systems Analysis
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4}>
                  <img src={AppPng2} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Hardware
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4}  sx={{px:{xs:0,md:10} , pt:{xs:10,md:0}}}>
                  <img src={AppPng3} width={35} ></img>
                  <Typography
                    variant="body1"
                    pt={1.2}
                    px={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Securitization
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng4} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Technical Writing
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Software Design
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      case "Conversational Banking":
        return (
          <Grid container xs={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 6, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="h4"
                paddingTop={0}
                sx={{ fontWeight: "bold" }}
              >
                Conversational Banking
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: { xs: "5px", sm: "0px" } }}
            >
              <Typography
                variant="body1"
                paddingTop={0}
                sx={{ fontFamily: "cursive", color: "grey" }}
              >
                “Humanize and personalize the technology behind your financial
                services as you step into a digital-first fintech ecosystem.”
              </Typography>
            </Grid>
            <Grid container spacing={2} pt={4}>
              <Grid item xs={12} md={6}>
                <Box height={"100%"} position="relative">
                  <Box
                    component="img"
                    src={ConBankImg}
                    alt="img"
                    width={"80%"}
                    height={"80%"}
                    mt={6}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  pt={8}
                  variant="h5"
                  fontFamily={"ProximaNova, sans-serif"}
                  fontWeight={"bold"}
                  lineHeight={1.6}
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Conversational banking is the deployment of chatbots to create
                  a human-like experience in fintech.
                </Typography>

                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  Our data science teams with expertise in natural language
                  processing and ML can design and deploy chatbots that resolve
                  your specific business challenges. The application can be used
                  to help customers find answers to FAQ’s to recover a password
                  and find the closest ATM.
                </Typography>
                <Typography
                  fontFamily={"ProximaNova, sans-serif"}
                  color="grey"
                  lineHeight={2}
                  pt={2}
                  variant="body1"
                  sx={{
                    px: { xs: 1, sm: 4, md: 8 },
                  }}
                >
                  These bots can also perform complex functions for your
                  customers like budgeting, giving financial advice and helping
                  with taxes.
                </Typography>
              </Grid>
            </Grid>

            <Grid sx={{ backgroundColor: "lightgrey" }}>
              <Typography variant="h3" fontWeight={"bold"}  pt={5} sx={{px:{xs:5,md:10}}}>
                Key Skills & Expertise:
              </Typography>
              <Grid container pt={10}  pb={2} sx={{px:{xs:2,md:10}}}>
                <Grid item  display="flex" xs={4} sx={{px:{xs:2,md:10}}}>
                  <img src={AppPng1} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    AI/ML
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4}>
                  <img src={AppPng2} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Datastructure and Algorithms
                  </Typography>
                </Grid>
                <Grid item display="flex" xs={4} sx={{px:{xs:2,md:10 } ,pt:{xs:10,md:0}}}>
                  <img src={AppPng3} width={35}></img>
                  <Typography
                    variant="body1"
                    pt={1.2}
                    px={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    UX/UI
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng4} width={35}></img>
                  <Typography
                    variant="body1"
                    px={2}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Knowledge Base Software
                  </Typography>
                </Grid>
                <Grid item  display="flex" xs={4} pt={10} sx={{px:{xs:2,md:10}}}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Front-End Interface
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Natural Language processing
                  </Typography>
                </Grid>
                <Grid item display="flex" xs={4} pt={10} sx={{px:{xs:2,md:10}}}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Dialogue Manager
                  </Typography>
                </Grid>
                <Grid item px={10} display="flex" xs={4} pt={10}>
                  <img src={AppPng5} width={50}></img>
                  <Typography
                    variant="body1"
                    px={1}
                    py={1}
                    fontFamily={"ProximaNova, sans-serif"}
                    fontWeight={"bold"}
                  >
                    Business Process Modeling
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      default:
        return "Please select a technology to view its content.";
    }
  };

  return (
    <div>
      <Header />
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Box>
            <Box
              component="img"
              src={Tech1Img}
              alt="img"
              width={"100%"}
              sx={{
                objectFit: "cover",
                paddingTop: { xs: "60px", sm: "20px", md: "0px" },
                paddingBottom: { xs: "10px" },
                margin: "0",
                width: { xs: "100%", md: "100%" },
                height: { xs: "30%", md: "60%" },
              }}
            />
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                top: { xs: "18%", md: "27%" },

                left: { xs: "3%", md: "5%" },
                fontSize: { xs: "17px", md: "44px" },
                color: "rgb(206, 216, 210)",
                fontWeight: "bold",
                textDecoration: "underline",
                textDecorationColor: "grey",
                textDecorationThickness: "3px",
                padding: { xs: "10px", md: "20px" },
                borderRadius: "8px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              }}
            >
              Our Technology
            </Typography>
          </Box>
         
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            pt={2}
            xs={12}
            md={12}
            sx={{
              px: 0,
              py: { xs: "10px", sm: "20px" },
              position: "sticky",
              top: 60,
             display:{xs:'block',md:'flex' , },
              backgroundColor: "lightgrey",
              zIndex: 5,
              borderBottom: "1px solid #ddd",
              overflowX: "auto",
            }}
          >
            <Grid item xs={2} px={0}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Application Development")}
              >
                Application Development
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("PMO & Shared Services")}
              >
                PMO & Shared Services
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Emerging Technologies")}
              >
                Emerging Technologies
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Communications & Telephony")}
              >
                Communications & Telephony
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Technical Architecture")}
              >
                Technical Architecture
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                fontFamily={"ProximaNova, sans-serif"}
                sx={{ cursor: "pointer" }}
                onClick={() => handleClick("Conversational Banking")}
              >
                Conversational Banking
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ padding: 2, marginTop: 1 }}>
            <Typography variant="body1">{getContent()}</Typography>
          </Box>
        </Grid>
      </Grid>
      <FooterComp />
    </div>
  );
};
