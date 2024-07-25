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

export default function Checkout() {
  const { snackbar, setSnackbar, cart, setCart } = useContext(Global);

  const handlePayNow = () => {
    if (cart.length) {
      alert("connect to api");
    } else {
      setSnackbar((snackbar) => ({
        ...snackbar,
        open: true,
        text: `Your cart is empty`,
        severity: "error",
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
                    <TextField variant="outlined" label="Name" size="small" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      size="small"
                      variant="outlined"
                      color="orange"
                      onClick={() => handlePayNow()}
                    >
                      Pay Now
                    </Button>
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
