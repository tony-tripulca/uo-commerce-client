import React from "react";

import { Box, Container, MenuItem, MenuList, Typography } from "@mui/material";

import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <React.Fragment>
      <Box component={"nav"} id="header">
        <Container maxWidth="xl" className="header-holder">
          <Box
            component={"img"}
            src="/assets/logo.png"
            alt="UO Store"
            className="main-logo"
          />
          <MenuList>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Products</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">My Cart</Link>
            </MenuItem>
          </MenuList>
        </Container>
      </Box>
    </React.Fragment>
  );
}
