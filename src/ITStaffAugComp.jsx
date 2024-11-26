import { Grid, Typography, Paper, Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import teampng from "./assets/team.png";
import AOS from "aos";
import arrowgif from "./assets/arrow.gif";
import ideapng from "./assets/solution.png";
import ITStaffImg1 from "./assets/itstaffImg1.jpg";
import ITStaffImg2 from "./assets/itstaffImg2.jpg";
import ITStaffImg3 from "./assets/itstaffImg3.jpg";
import ITStaffImg4 from "./assets/itstaffImg4.jpg";
import { FooterComp } from "./FooterComp";
AOS.init();

export const ITStaffAugComp = () => {
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
            IT Staff Augmentation
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ px: 5, py: { xs: "5px", sm: "4px" } }}>
          <Typography
            variant="body1"
            paddingTop={0}
            sx={{ fontFamily: "cursive", color: "grey" }}
            lineHeight={2.3}
          >
            “With a global reach and a hyperlocal market expertise, we help you
            build IT teams across all tech stacks for diverse business goals.”
          </Typography>
        </Grid>
      </Grid>

      <Grid container pt={3} spacing={2} pl={3}>
        <Grid item pl={6} xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ borderRadius: "10px", backgroundColor: "lightgrey" }}
          >
            <Typography variant="h4" sx={{ px: { xs: 8, sm: 20 } }} pt={5}>
              01
            </Typography>
            <Box
              component="img"
              src={teampng}
              sx={{ width: "140px", height: "140px" }}
              px={14}
            ></Box>
            <Typography
              variant="h5"
              px={11}
              sx={{
                fontFamily: "cursive",
                fontWeight: "ProximaNova, sans-serif",
              }}
              pb={4}
            >
              Finding the right people
            </Typography>
            <Box
              component="img"
              src={arrowgif}
              sx={{ width: "70px", height: "50px", pl: { xs: 12, md: 30 } }}
            ></Box>
          </Paper>
        </Grid>
        <Grid item pr={4} xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ borderRadius: "10px", backgroundColor: "lightblue" }}
          >
            <Typography variant="h4" px={20} pt={5}>
              02
            </Typography>
            <Box
              component="img"
              src={ideapng}
              sx={{ width: "140px", height: "140px" }}
              px={17}
            ></Box>
            <Typography
              variant="h5"
              px={11}
              sx={{
                fontFamily: "cursive",
                fontWeight: "ProximaNova, sans-serif",
              }}
              pb={4}
            >
              Building a staffing program
            </Typography>
            <Box
              component="img"
              src={arrowgif}
              sx={{ width: "70px", height: "50px", pl: { xs: 12, md: 30 } }}
            ></Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container pt={3} sx={{ overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-right"
          data-aos-duration={"3000"}
          sx={{ overflow: "hidden", position: "relative" }}
        >
          <Box
            component="img"
            src={ITStaffImg1}
            alt="img"
            width={"100%"}
            height={"auto"}
            maxHeight={"650px"}
          />
        </Grid>

        <Grid item xs={12} md={6} sx={{ backgroundColor: "#e6ddd6" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
              textDecoration: "underline",
              textDecorationColor: "green",
              textUnderlineOffset: "6px",
            }}
            pt={4}
            px={8}
            data-aos="fade-left"
            data-aos-duration={"2000"}
          >
            Who do we
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
            }}
            px={8}
            pt={1}
            data-aos="fade-left"
            data-aos-duration={"3000"}
          >
            work with?
          </Typography>
          <Typography
            variant="h6"
            pt={8}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              pl: { sx: 1, md: 8 },
              pr: { sx: 1, md: 12 },
              fontSize: "18px",
            }}
            lineHeight={2}
            data-aos={"fade-left"}
            data-aos-duration={"2000"}
          >
            The quick answer is Everyone. Indifferent of whether your business
            is Grandiose, Tiny, or the land of somewhere in between, we can
            help. Obtaining the specific and correct talent and workforce
            strategies for your business means having a staffing partner who
            knows your goals and can not only support but adapt to deliver when
            they change. Here's how Syncor Solutions leverages that flexibility
            to help your business grow.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "rgb(180, 229, 219)" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
              textDecoration: "underline",
              textDecorationColor: "green",
              textUnderlineOffset: "6px",
            }}
            pt={12}
            px={8}
            data-aos="fade-left"
            data-aos-duration={"2000"}
          >
            We are a staffing
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
            }}
            px={8}
            pt={1}
            data-aos="fade-left"
            data-aos-duration={"3000"}
          >
            partner that is flexible with you
          </Typography>
          <Typography
            variant="h6"
            pt={8}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              pl: { sx: 1, md: 8 },
              pr: { sx: 1, md: 12 },
              fontSize: "18px",
            }}
            lineHeight={2}
            data-aos={"fade-left"}
            data-aos-duration={"2000"}
          >
            If you're looking to grow your business, you'll need people to help
            you get there. Whether you're hiring for a single need or for many,
            we can provide you with immediate staffing support. Once you've got
            great people, it’s important to keep them on your team. Reducing
            turnover and focusing on retention are ways we mitigate costly
            mistakes that happen in the hiring market as tight as it is today.
            Syncor Solutions can help by arming you with the latest strategies
            and industry best practices on everything from employee retention
            and engagement to workforce management, talent planning and more.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-right"
          data-aos-duration={"3000"}
          sx={{ position: "relative", overflow: "hidden" }}
        >
          <Box
            component="img"
            src={ITStaffImg2}
            alt="img"
            width={"100%"}
            height={"auto"}
            maxHeight="100%"
          />
        </Grid>
      </Grid>
      <Grid container sx={{ overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-right"
          data-aos-duration={"3000"}
          sx={{ overflow: "hidden", position: "relative" }}
        >
          <Box
            component="img"
            src={ITStaffImg3}
            alt="img"
            width={"100%"}
            height={"auto"}
            maxHeight={"760px"}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "rgb(235, 188, 227)" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
              textDecoration: "underline",
              textDecorationColor: "green",
              textUnderlineOffset: "6px",
            }}
            pt={4}
            px={8}
            data-aos="fade-left"
            data-aos-duration={"2000"}
          >
            Catered to your needs
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
            }}
            px={8}
            pt={1}
            data-aos="fade-left"
            data-aos-duration={"3000"}
          >
            talent strategies and staffing solutions
          </Typography>
          <Typography
            variant="h6"
            pt={8}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              pl: { sx: 1, md: 8 },
              pr: { sx: 1, md: 12 },
              fontSize: "18px",
            }}
            lineHeight={2}
            data-aos={"fade-left"}
            data-aos-duration={"2000"}
          >
            Who better to find the right people for your business than a company
            who has a dedicated team of professionals walking hand in hand with
            you? We don’t believe that your business exists in a vacuum and its
            success is tied to key trends happening in your local community and
            market. At Syncor Solutions, we have recruiters who specialize in
            local markets all across the country. This ensures that you get
            personalized strategies based on the latest market data. Being the
            world's most dedicated provider of staffing services means our
            clients don't just gain access to our extensive network of global
            talent, we also help them hire more effectively through automated
            sourcing, interviewing and onboarding technologies and processes.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ overflow: "hidden" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "rgb(180, 229, 219)" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.45)",
              textDecoration: "underline",
              textDecorationColor: "green",
              textUnderlineOffset: "6px",
            }}
            pt={12}
            px={8}
            data-aos="fade-left"
            data-aos-duration={"2000"}
          >
            Conclusion
          </Typography>

          <Typography
            variant="h6"
            pt={8}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              pl: { sx: 1, md: 8 },
              pr: { sx: 1, md: 12 },
              fontSize: "18px",
            }}
            lineHeight={2}
            data-aos={"fade-left"}
            data-aos-duration={"2000"}
          >
            At Syncor Solutions, we're assembled to help businesses of all
            shapes and sizes find the best-fit talent fast and we are committed
            to reducing costs that come with low retention and high turnover.
            With staffing solutions tailored to your company by our local
            experts, you'll be able to truly optimize your workforce. Partnering
            with Syncor Solutions means getting world-class resources with the
            personalized delivery of a boutique firm.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          data-aos="fade-right"
          data-aos-duration={"3000"}
          sx={{ position: "relative", overflow: "hidden" }}
        >
          <Box
            component="img"
            src={ITStaffImg4}
            alt="img"
            width={"100%"}
            height={"auto"}
            maxHeight="100%"
          />
        </Grid>
      </Grid>
      <FooterComp/>
    </Grid>
   
  );
};
