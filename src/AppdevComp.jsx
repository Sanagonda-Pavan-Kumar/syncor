import React from "react";
import { Header } from "./Header";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { FooterComp } from "./FooterComp";
import Appdev1Img from "./assets/appdev2.jpg";
export const AppdevComp = () => {
  return (
    <Grid>
      <Grid>
        <Header />
      </Grid>
      <Grid container xs={12} pt={12} >
        <Grid
          item
          xs={12}
          md={12}
          sx={{ px: 5, py: { xs: "5px", sm: "28px" } }}
        >
          <Typography variant="h4" paddingTop={0} sx={{ fontWeight: "bold" }}>
            Application Development
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 5, py: { xs: "5px", sm: "4px" } }}>
          <Typography
            variant="body1"
            paddingTop={0}
            sx={{ fontFamily: "cursive", color: "grey" }}
            lineHeight={2.3}
          >
            “Allocate your resources efficiently by leveraging our out sourcing
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
              src={Appdev1Img}
              alt="img"
              width={"85%"}
              height={"70%"}
              mt={6}
              sx={{
                px: { xs: 2, sm: 4, md: 0 },
              }} py={0}
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
              fontSize:'18px'
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
                fontSize:'18px'
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
      <Grid mt={0}>
      <FooterComp />
      </Grid>
    </Grid>
  );
};
