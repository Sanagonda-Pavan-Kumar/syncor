import React from "react";
import { Header } from "./Header";
import { Grid, Typography, Box } from "@mui/material";
import { FooterComp } from "./FooterComp";
import ITTrainImg from "./assets/ITTrainImg.jpg";
export const ITtrainingComp = () => {
  return (
    <Grid>
      <Grid>
        <Header />
      </Grid>
      <Grid container pt={6.5} spacing={2} pb={5}>
        <Grid item xs={12} md={12}>
          <Typography
            pt={8}
            sx={{
              fontFamily: "ProximaNova, sans-serif",
              fontWeight: "bold",
              fontSize: "30px",
              color: "brown",
              textDecoration: "underline",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
            variant="h6"
            px={4}
          >
            Great Talent Deserves A Great Start
          </Typography>
        </Grid>
      </Grid>
      <Grid container pt={0}>
        <Grid item xs={12} md={6}>
          <Box height={"100%"}>
            <Box
              component="img"
              src={ITTrainImg}
              alt="img"
              width={"80%"}
              height={"80%"}
              px={3}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
           
            variant="h5"
            fontFamily={"ProximaNova, sans-serif"}
            fontWeight={"bold"}
            lineHeight={2}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "black",
            }}
          >
            Corporate Training :
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={2}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "grey",
              fontSize: "18px",
            }}
            pt={1}
          >
            We provide corporate training in the emerging technologies that are
            transforming our economy. Our blended learning approach drives
            learner engagement and the industry’s highest completion rates.
          </Typography>
          <Typography
            variant="h5"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={2}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "grey",
            }}
          >
            We believe in :
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={1.7}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "grey",
              fontSize: "18px",
            }}
          >
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>High engagement & Outcome driven</li>
              <li>Small classroom sizes</li>
              <li>Latest and updated curriculum from industry experts</li>
            </ul>
          </Typography>
          <Typography
            variant="h5"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={2}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "grey",
            }}
          >
            Our Forte:
          </Typography>
          <Typography
            variant="h6"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={1.7}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              fontSize: "18px",
              color: "grey",
            }}
          >
            <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
              <li>Java Fullstack</li>
              <li>Cloud Computing</li>
              <li>Big Data</li>
              <li>Data Science : Tableau</li>
              <li>Project Management</li>
              <li>Agile & Scrum</li>
            </ul>
          </Typography>
          <Typography
            variant="h5"
            fontFamily={"ProximaNova, sans-serif"}
            fontWeight={"bold"}
            lineHeight={2}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              color: "black",
            }}
          >
            Individual Training :
          </Typography>

          <Typography
            variant="h6"
            fontFamily={"ProximaNova, sans-serif"}
            lineHeight={1.7}
            sx={{
              px: { xs: 1, sm: 4, md: 1 },
              fontSize: "20px",
              color: "grey",
            }}
            pt={2}
          >
            Looking to enhance your skills ?
          </Typography>
        </Grid>
      </Grid>

      <FooterComp />
    </Grid>
  );
};
