import React from "react";
import { Header } from "./Header";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { FooterComp } from "./FooterComp";
import ManageServiceImg from "./assets/manageserviceImg.jpg";

export const ManagedServices = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>

      <Grid container spacing={2} pt={12} px={4}>
        <Grid item xs={12} sx={{ px: 5, py: { xs: "5px", sm: "28px" } }}>
          <Typography variant="h4" paddingTop={0} sx={{ fontWeight: "bold" ,}}>
            Managed Services
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 5, py: { xs: "5px", sm: "4px" } }}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "cursive", color: "grey" }}
            lineHeight={2.3}
          >
            “Allocate your resources efficiently by leveraging our outsourcing
            services across a wide range of business functions in fintech and
            regtech.”
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} >
        <Grid item xs={12} md={6}>
          <Box height={"100%"} position="relative">
            <Box
              component="img"
              src={ManageServiceImg}
              alt="Project Management"
              width={"85%"}
              height={"85%"}
              mt={6}
              sx={{
                px: { xs: 2, sm: 4, md: 0 },
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography
            fontFamily={"ProximaNova, sans-serif"}
            color="grey"
            lineHeight={2}
            pt={20}
            variant="body1"
            sx={{
              px: { xs: 1, sm: 4, md: 0 },
              pr: { md: 6 },
              fontSize: "18px",
              
            }} 
          >
            Syncor helps our clients control costs through a variety of
            services designed to deliver efficiency and productivity gains. If
            your IT department needs to control costs yet continue to deliver
            top-notch business services to your organization, contact us. Our
            managed services allow you to focus on your business while we handle
            the rest.
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
            Off-premise application management can be tricky – which is why it’s
            key to find a service provider you trust. Syncor has a long track
            record of established client relationships; this is testament to our
            focus on client service and long-term relationship building.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} px={10} pb={6}>
        <Grid item xs={12} md={12} sx={{ px: 3 }}>
          <Paper elevation={20} sx={{ padding: 2 }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "ProximaNova, sans-serif", color: "black" ,fontWeight:'bold'}}
              lineHeight={2}
              py={2}
              px={5}
            >
              The Syncor Difference
            </Typography>
            <Typography
              variant="body1"
              pt={2}
              sx={{ fontFamily: "cursive", color: "grey" }}
              lineHeight={2}
              px={5}
            >
              Our managed services models are designed to share your vision,
              objectives, and goals. We work with you to build a roadmap through
              collaboration and trust.
            </Typography>
            <Typography
              variant="body1"
              pt={2}
              sx={{ fontFamily: "cursive", color: "grey" }}
              lineHeight={2}
              px={5}
            >
              Our solutions minimize strategic and operational continuity risk
              and provide end-to-end services that are high quality,
              uninterrupted, and meet all industry standards.
            </Typography>
            <Typography
              variant="body1"
              pt={2}
              sx={{ fontFamily: "cursive", color: "grey" }}
              lineHeight={2}
              px={5}
            >
              We can recommend output or outcome-based models all governed by a
              service-level management arrangement that addresses demand and
              volume fluctuations.
            </Typography>
            <Typography
              variant="body1"
              pt={2}
              sx={{ fontFamily: "cursive", color: "grey" }}
              lineHeight={2}
              px={5}
            >
              Most importantly, our years of experience mean that we use best
              practices to ensure continued connectivity using our
              state-of-the-art infrastructure capabilities.
            </Typography>
            <Typography
              variant="body1"
              pt={2}
              sx={{ fontFamily: "cursive", color: "grey" }}
              px={5}
            >
              Our services include:
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "cursive", color: "grey" }}
              lineHeight={2}
              px={5}
              pb={2}
            >
              Contact us today to learn more about the secure, cost-saving
              managed services programs we’ve implemented for other
              organizations.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid item>
        <FooterComp />
      </Grid>
    </Grid>
  );
};
