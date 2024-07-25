import React from "react";
import { Helmet } from "react-helmet";

import { Box, Container, Typography } from "@mui/material";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Homepage.scss";

export default function Homepage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | UO Store </title>
      </Helmet>
      <Header />
      <Box component={"section"} id="homepage">
        <Container maxWidth="xl" className="homepage-holder">
          <Typography className="lead">Welcome to UO Store!</Typography>
          <Typography>Get the best product anywhere, anytime.</Typography>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
