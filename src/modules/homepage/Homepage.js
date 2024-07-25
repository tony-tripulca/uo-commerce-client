import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Homepage.scss";

export default function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <Box component={"section"} id="homepage">
        <Container maxWidth="xl" className="homepage-holder">
          <Typography>Homepage</Typography>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
