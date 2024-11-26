import React from "react";
import { Header } from "./Header";
import AboutUsImg1 from "./assets/aboutusImg1.jpg";
import AboutUsImg2 from "./assets/aboutusImg2.jpg";
import SyncorLogo from "./assets/Syncorlogo.png";
import { Global } from "@emotion/react";
import OurMission1 from './assets/missionpng1.png'
import {
  Box,
  Grid,
  Typography,
  Stack,
  Container,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { Button } from "@mui/material";
import { FooterComp } from "./FooterComp";
import OurVisionImg from "./assets/ourvision.jpg";
import "aos/dist/aos.css";
import WhoWeAreVid from "./assets/whowearevid1.mp4";
import { Carousel } from "antd";
import OurMissionImg1 from "./assets/ourmission1.jpg";
export const AboutusComp = () => {
  const slideInStyle = `
    @keyframes subtleSlide {
      0% {
        transform: translateX(5%);
        opacity: 0.8;
      }
      50% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(5%);
        opacity: 0.8;
      }
    }
  `;

  return (
    <div>
      <Header />
      <Global styles={slideInStyle} />

      <Grid container mt={8}>
        <Grid item xs={12} md={6}>
          <Box height={"100%"} position="relative">
            <Box
              component="img"
              src={AboutUsImg1}
              alt="img"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack
            p={{ xs: 4, md: 0 }}
            sx={{ backgroundColor: "lightblue", height: "100%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontFamily={"ProximaNova, sans-serif"}
          >
            <Typography
              variant="h4"
              sx={{ animation: "subtleSlide 6s ease-in-out infinite" }}
            >
              A Premiere IT Consulting
            </Typography>
            <Typography
              variant="h4"
              sx={{ animation: "subtleSlide 6s ease-in-out infinite" }}
            >
              &
            </Typography>
            <Typography
              variant="h4"
              sx={{ animation: "subtleSlide 6s ease-in-out infinite" }}
            >
              Solution Provider Company
            </Typography>

            <Typography
              pt={2}
              variant="body1"
              sx={{ animation: "subtleSlide 6s ease-in-out infinite" }}
            >
              " Insightful solutions to help your business grow "
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Container>
        <Box py={{ xs: 2, md: 4 }}>
          <Stack>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "ProximaNova, sans-serif",
                cursor: "pointer",
                transition: "text-decoration 0.3s ease",
                fontWeight: "bold",
                paddingTop: { xs: 8, md: 1 },
              }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")(
                  (e.target.style.textDecorationColor = "orange")
                )
              }
              onMouseLeave={(e) =>
                (e.target.style.textDecoration = "none")(
                  (e.target.style.textDecorationColor = "transparent")
                )
              }
            >
              About Us
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            pb={2}
            pt={2}
            sx={{
              fontFamily: "ProximaNova, sans-serif",

              lineHeight: "2rem",
            }}
          >
            Syncor is a professional services firm specializing in Information
            Technology consulting, outsourcing services, managed services,
            network security and application development. We help all companies
            from FORTUNE 500 to mid-sized and small meet their business needs
            through cost-effective outsourced and technology services that
            deliver measurable results.
          </Typography>

          <Typography
            variant="body1"
            pb={2}
            sx={{
              fontFamily: "ProximaNova, sans-serif",

              lineHeight: "2rem",
            }}
          >
            At Syncor, we understand that outsourcing is about more than filling
            production gaps – it’s about developing a strategic partnership that
            creatively and effectively solves business problems using the latest
            technology and strategic thinking. We can provide the application or
            software development overall outsourcing strategy or all of the
            above plus a full-scale implementation.
          </Typography>

          <Typography
            variant="body1"
            pb={2}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              lineHeight: "2rem",
            }}
          >
            Our IT and managed services solutions are designed to meet the needs
            of clients in every sector. We have worked with a variety of
            industries, including insurance, healthcare, manufacturing, life
            sciences, supply chain management, government, retail and workforce
            management companies.
          </Typography>
        </Box>
      </Container>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Stack
            p={{ xs: 0, md: 0 }}
            sx={{ backgroundColor: "lightblue", height: "100%" }}
            fontFamily={"ProximaNova, sans-serif"}
          >
            <Typography
              variant="h3"
              justifyContent={"center"}
              textAlign={"center"}
              my={4}
            >
              Our Approach
            </Typography>
            <br />
            <Typography
              variant="body1"
              justifyContent={"center"}
              textAlign={"center"}
            >
              "At Syncor, we judge ourselves by a few simple metrics: "
            </Typography>
            <Typography
              variant="h6"
              lineHeight={2.5}
              px={ window.innerWidth < 576 ? 3 : 13}
             sx={{fontSize:'17px'}} 

            >
             
                <ul style={{ listStylePosition: "inside" }} >
                  <li >Client satisfaction</li>
                  <li >
                    Reliability of our solutions
                  </li>
                  <li >Unbeatable value</li>
                </ul>
             
            </Typography>
            <br />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={"100%"}>
            <Box
              component="img"
              src={AboutUsImg2}
              alt="img"
              width={"100%"}
              height={"100%"}
              sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.9)",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Container sx={{ py: 3 }}>
        <Box pb={{ xs: 2, md: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              cursor: "pointer",
              transition: "text-decoration 0.3s ease",
              fontWeight: "bold",
              paddingTop: { xs: 8, md: 1 },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = "underline")(
                (e.target.style.textDecorationColor = "orange")
              )
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = "none")(
                (e.target.style.textDecorationColor = "transparent")
              )
            }
          >
            Who we are
          </Typography>
        </Box>
      </Container>

      <Grid container xs={12}>
        <Grid item xs={12} md={4} sx={{ px: 3, py: { xs: "5px", sm: "0px" } }}>
          <Paper elevation={20}>
            <Typography
              py={5.9}
              px={5}
              variant="body1"
              sx={{ fontFamily: " cursive", color: "grey" }}
              lineHeight={2}
            >
              We are tech-optimists who believe that technology can not only
              change the way businesses do things, but also help them redefine
              themselves. It's with this vision we started Syncor Solutions in
              2005.{" "}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ px: 3, py: { xs: "5px", sm: "0px" } }}>
          <Paper elevation={20}>
            <Typography
              py={6}
              px={6}
              variant="body1"
              sx={{ fontFamily: " cursive", color: "grey" }}
              lineHeight={2}
            >
              We began with providing IT solutions to North American businesses,
              but soon diversified into employee training strategy consulting
              and product development.{" "}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{ px: 3, py: { xs: "5px", sm: "0px" } }}>
          <Paper elevation={20}>
            <Typography
              py={6}
              px={6}
              variant="body1"
              sx={{ fontFamily: " cursive", color: "grey" }}
              lineHeight={2}
            >
              Today we are dedicated to increasing the uptake of financial and
              regulatory technology by organizations around the world with a
              view to transform the way businesses transact.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Stack
        sx={{ alignItems: "center", justifyContent: "center" }}
        px={{ xs: 6, md: 60 }}
        py={7}
      >
        <Button
          variant="contained"
          sx={{
            height: "50px",
            width: "100%",
            borderRadius: "10px",
            background: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "-5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #444, inset -5px -5px 10px #222",
            fontFamily: '"Damion", cursive',
            cursor: "pointer",
            fontSize: "16px",
            color: "white",
            transition: "500ms",
          }}
          onClick={() => window.location.href = '/'}  
        >
          View Our Service{""} 
        </Button>
      </Stack>

      <Box sx={{ backgroundColor: "lightgrey" }} py={{ xs: 2, md: 4 }}>
        <Container>
          <Box pb={{ xs: 2, md: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "ProximaNova, sans-serif",
                cursor: "pointer",
                transition: "text-decoration 0.3s ease",
                fontWeight: "bold",
                paddingTop: { xs: 8, md: 1 },
              }}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = "underline")(
                  (e.target.style.textDecorationColor = "orange")
                )
              }
              onMouseLeave={(e) =>
                (e.target.style.textDecoration = "none")(
                  (e.target.style.textDecorationColor = "transparent")
                )
              }
            >
              {" "}
              Our Vision
            </Typography>

            <Grid container spacing={2} pt={4}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  backgroundColor: "#e0e0e0",
                  boxShadow:
                    "inset 27px 27px 54px #8b8b8b, inset -27px -27px 54px #ffffff",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "ProximaNova, sans-serif",
                    lineHeight: "2.5",
                    fontSize: "16px",
                  }}
                  py={4}
                  px={4}
                >
                  At Syncor, we see ourselves through your eyes. We want to be
                  the market leader – not just through the quality of services
                  we provide, but for our relationships with our clients and our
                  recruitment and retention of our staff. Whether you are a
                  FORTUNE 500 company, a small business or a medium-sized
                  corporation, we want to build a long-term strategic
                  relationship with you that’s mutually beneficial from the
                  beginning – and evolves as technology changes, strategies
                  develop and your company grows.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  backgroundImage: `url(${OurVisionImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: { xs: "200px", sm: "400px", md: "auto" },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "ProximaNova, sans-serif",
                    lineHeight: "2.5",
                    fontSize: "16px",
                    color: "white",
                  }}
                  pt={6}
                ></Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Grid px={4}>
      <Grid container  sx={{backgroundColor:"rgb(22,99,99,0.5)"}}>
        <Box py={4}>
          <Typography
            variant="h3"
            px={5}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              cursor: "pointer",
              transition: "text-decoration 0.3s ease",
              fontWeight: "bold",
              paddingTop: { xs: 8, md: 1 },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              
            }}
            onMouseEnter={(e) =>
              (e.target.style.textDecoration = "underline")(
                (e.target.style.textDecorationColor = "black")
              )
            }
            onMouseLeave={(e) =>
              (e.target.style.textDecoration = "none")(
                (e.target.style.textDecorationColor = "transparent")
              )
            }
          >
            {" "}
            Our Mission
          </Typography>
        </Box>
      </Grid>
      </Grid>
      <Grid px={4}>
      <Grid container px={5} sx={{backgroundColor:'#ecfdf1'}}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              lineHeight: "2.5",
              fontSize: "16px",
              color: "black",
            }}
            py={3}
            px={4}
          >
            For the past 7  years, we have focused solely on using our expertise
            network and experience to serve the needs of our clients. Our
            Mission is delivering results for clients that move the needle –
            financially, strategically and technologically – so that they can be
            the best in their industries. That’s what makes us the best in our
            industry.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              lineHeight: "2.5",
              fontSize: "16px",
              color: "black",
            }}
            py={3}
            px={4}
          >
            We do this through unparalleled support and being creatively
            synergized with our clients, while being mindful of the results and
            cost savings they seek to achieve. We also do this through
            recruitment of highly skilled qualified staff and retention through
            working in the best environments with the best clients.
          </Typography>
        </Grid>
     

     
        <Grid
          item
          xs={12}
          md={6}
         
        >
          <List>
            <ListItem>
              <Typography
                variant="h6"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                Our Continuing Objectives are :
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                1.Provide the absolute highest quality consulting services and
                customer support to our clients.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                2. Establish long-term mutually beneficial relationships with
                both our clients and our staff.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                3. Deliver every day superior performance with superior people
                for superior results.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                4. Stay abreast – and ahead of – the latest technological
                landscape.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{ fontFamily: "ProximaNova, sans-serif" }}
              >
                5.Recruit and retain the best staff in the industry.
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component='img' src={OurMission1} sx={{width:'65%', opacity: 0.1,}} px={8} py={2}>
           
          </Box>
        </Grid>
        </Grid>
        </Grid>
      <FooterComp />
    </div>
  );
};
