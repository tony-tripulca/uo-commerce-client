import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Container,
  MenuItem,
  MenuList,
  TextField,
  Typography,
} from "@mui/material";

import Global from "../../util/global";

import "./Header.scss";

export default function Header() {
  const { userEmail, setUserEmail, snackbar, setSnackbar } = useContext(Global);

  useEffect(() => {
    setUserEmail(localStorage.getItem("userEmail"));
  }, []);

  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

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
              <Link to="/products">Products</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/checkout">My Cart</Link>
            </MenuItem>
          </MenuList>
          <TextField
            label="Your email"
            size="small"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </Container>
      </Box>
    </React.Fragment>
  );
}
