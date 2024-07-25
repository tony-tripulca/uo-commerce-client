import React from "react";

import { Box, Container, Typography } from "@mui/material";

import "./Footer.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <Box component={"footer"} id="footer">
        <Container maxWidth="xl" className="footer-holder">
          <Box component={"img"} src="/assets/logo.png" alt="UO Store" />
          <Typography>&copy;2024 UO Store&trade;</Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
}
