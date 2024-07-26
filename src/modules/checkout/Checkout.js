import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import Global from "../../util/global";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Checkout.scss";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { snackbar, setSnackbar, cart, setCart } = useContext(Global);

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handlePayNow = () => {
    if (cart.length) {
      UserService.create(user)
        .then(async (response) => {
          setSnackbar((snackbar) => ({
            ...snackbar,
            open: true,
            text: `Thank you!`,
            severity: "success",
            duration: 3000,
          }));

          setCart([]);
        })
        .catch((error) => {
          setSnackbar((snackbar) => ({
            ...snackbar,
            open: true,
            text: `Oops! Something went wrong`,
            severity: "error",
            duration: 3000,
          }));
        });
    } else {
      setSnackbar((snackbar) => ({
        ...snackbar,
        open: true,
        text: `Your cart is empty`,
        severity: "error",
        duration: 6000,
      }));
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Checkout | UO Store </title>
      </Helmet>
      <Header />
      <Box component={"section"} id="checkout">
        <Container maxWidth="xl" className="checkout-holder">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={9}>
              <Box>
                <Grid container spacing={2}>
                  {cart.map((item, i) => (
                    <Grid item xs={12} md={6} xl={4} key={i}>
                      <Paper variant="outlined" className="card-product">
                        <Typography>{item.name}</Typography>
                        <Typography>
                          ${parseFloat(item.price).toFixed(2)}
                        </Typography>
                        <Chip label={item.category} />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper variant="outlined" className="card-actions">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Customer Details</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      variant="outlined"
                      label="Full name"
                      size="small"
                      name="name"
                      value={user.name}
                      onChange={(event) => handleOnChange(event)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="email"
                      variant="outlined"
                      label="Email address"
                      size="small"
                      name="email"
                      value={user.email}
                      onChange={(event) => handleOnChange(event)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {cart.length ? (
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        color="orange"
                        onClick={() => handlePayNow()}
                      >
                        Pay Now
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        to="/products"
                        fullWidth
                        size="small"
                        variant="outlined"
                        color="orange"
                      >
                        Add Products
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
      <Snackbar
        anchorOrigin={{ vertical: snackbar.y, horizontal: snackbar.x }}
        autoHideDuration={snackbar.duration}
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.text}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
