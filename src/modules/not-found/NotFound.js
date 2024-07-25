import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Box, Typography } from "@mui/material";

import "./NotFound.scss";

export default function NotFound() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Not Found | UO Store </title>
      </Helmet>
      <Box component={"section"} id="not-found">
        <Box className="not-found-holder">
          <Typography>404 | Page Not Found</Typography>
          <Link to="/">Go to Homepage</Link>
        </Box>
      </Box>
    </React.Fragment>
  );
}
