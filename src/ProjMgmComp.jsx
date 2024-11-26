import React from "react";
import { Header } from "./Header";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { FooterComp } from "./FooterComp";
import ProjMgmImg from "./assets/projmgmImg.jpg";
export const ProjMgmComp = () => {
  return (
    <Grid>
      <Grid>
        <Header />
      </Grid>
      <Grid container xs={12} pt={12}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ px: 5, py: { xs: "5px", sm: "28px" } }}
        >
          <Typography variant="h4" paddingTop={0} sx={{ fontWeight: "bold" }}>
            Project Management
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 5, py: { xs: "5px", sm: "4px" } }}>
          <Typography
            variant="body1"
            paddingTop={0}
            sx={{ fontFamily: "cursive", color: "grey" }}
            lineHeight={2.3}
          >
            “Allocate your resources efficiently by leveraging our outsourcing
            services across a wide range of business functions in fintech and
            regtech.”
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box height={"100%"} position="relative">
            <Box
              component="img"
              src={ProjMgmImg}
              alt="img"
              width={"85%"}
              height={"70%"}
              mt={6}
              sx={{
                px: { xs: 2, sm: 4, md: 0 },
              }}
              py={0}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} pt={10}>
          <Typography
            fontFamily={"ProximaNova, sans-serif"}
            color="grey"
            lineHeight={2}
            pt={2}
            variant="body1"
            sx={{
              px: { xs: 1, sm: 4, md: 0 },
              pr: { md: 6 },
              fontSize: "18px",
            }}
          >
            The Syncor approach to project management is based on Extreme
            Programming methodology. Our approach minimizes risks associated
            with software development projects such as missed deadlines, budget
            overruns and ‘buggy’ software, while also allowing for a rapid
            response to the changing and evolving needs of the project during
            implementation.
          </Typography>
          <Typography
            fontFamily={"ProximaNova, sans-serif"}
            color="grey"
            lineHeight={2}
            pt={2}
            variant="body1"
            sx={{
              px: { xs: 1, sm: 4, md: 0 },
              pr: { md: 6 },
              fontSize: "18px",
            }}
          >
            We develop software in short and iterative stages in consultation
            with our clients in-house project leads, project managers and our
            software developers. This teamwork-centric approach makes the
            project team nimble, able to adjust to the changing direction of the
            project and client needs.
          </Typography>
        </Grid>
      </Grid>

      <Grid container xs={12} px={10} pb={6} >
        <Grid item xs={12} md={12} sx={{ px: 3, py: { xs: "5px", sm: "0px" } }}>
          <Paper elevation={20}>
            <Typography
           py={2}
              px={5}
              variant="h4"
              sx={{ fontFamily: "ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
            >
              The Syncor Difference
            </Typography>
            <Typography
              px={5}
              variant="body1"
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
            >
              The main goal of the Syncor approach is to reduce the cost
              associated with change for our clients. We do this by:
            </Typography>
            <Typography
              px={5}
              variant="body1"
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
            >
              <ul
                style={{
                  paddingLeft: "20px",
                  marginTop: "8px",
                  fontFamily: " ProximaNova, sans-serif",
                }}
              >
                <li>
                  {" "}
                  Designing the project to adapt to changing client needs as it
                  goes along
                </li>
                <li>
                  {" "}
                  Mitigate risk associated with cost, timeline and functionality
                </li>
                <li>
                  Allowing space for programmers and developers to innovate
                  within the project, inventing customize solutions to problems
                  that arise along the way
                </li>
              </ul>
            </Typography>
            <Typography
              px={5}
              variant="body1"
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
            >
              Read on below for more specific information about our skills and
              expertise, methodologies and delivery model. Then contact us to
              put the agile, nimble approach of the Syncor to work for you!
            </Typography>
            <Typography
              px={5}
              variant="body1"
              pt={2}
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
            >
              Your Syncor project team will be selected from our highly
              qualified stable of experts, in accordance with the needs of your
              specific project. With clients in virtually every sector with
              every type of professional expertise, we have just the team to
              implement your project on time, on budget, customizing your
              installation along the way.
            </Typography>
            <Typography
              px={5}
              variant="body1"
              pt={2}
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
            >
             Our services include:
            </Typography>
            <Typography
              px={5}
              variant="body1"
              sx={{ fontFamily: " ProximaNova, sans-serif", color: "grey" }}
              lineHeight={2}
              pb={2}
            >
              <ul
                style={{
                  paddingLeft: "20px",
                  marginTop: "8px",
                  fontFamily: " ProximaNova, sans-serif",
                }}
              >
                <li>
                  
                E-Commerce Platforms
                </li>
                <li>
                Enterprise Application Integration and Quality Services
                </li>
                <li>
                Application Development and Maintenance
                </li>
                <li>
                Supply Chain Management Solutions
                </li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid mt={0}>
        <FooterComp />
      </Grid>
    </Grid>
  );
};
