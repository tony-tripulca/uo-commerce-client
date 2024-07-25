import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";

import Global from "../../util/global";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Products.scss";
import { duration } from "moment";

const tempData = [
  {
    id: 1,
    name: "Lounge Chair",
    price: 2000,
    category: "Chairs",
  },
  {
    id: 2,
    name: "Dining Chair",
    price: 1800,
    category: "Chairs",
  },
  {
    id: 3,
    name: "Table1",
    price: 3000,
    category: "Tables",
  },
  {
    id: 4,
    name: "Table2",
    price: 3200,
    category: "Tables",
  },
  {
    id: 5,
    name: "Table3",
    price: 3100,
    category: "Tables",
  },
  {
    id: 5,
    name: "Dining Top",
    price: 900,
    category: "Tops",
  },
];

export default function Products() {
  const { category } = useParams();

  const { snackbar, setSnackbar, userEmail, cart, setCart } =
    useContext(Global);

  const [products, setProducts] = useState([]);

  const handleAddToCart = (data) => {
    setCart((cart) => [...cart, data]);

    setSnackbar((snackbar) => ({
      ...snackbar,
      open: true,
      text: `Added to cart`,
      severity: "success",
      duration: 500,
    }));
  };

  useEffect(() => {
    if (!category) {
      setProducts(tempData);
    } else {
      let result = tempData.filter(
        (i) => i.category.toLowerCase() === category
      );
      setProducts(result);
    }
  }, [category]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Products | UO Store </title>
      </Helmet>
      <Header />
      <Box component={"section"} id="products">
        <Container maxWidth="xl" className="products-holder">
          <Typography className="menu-label">Categories</Typography>
          <MenuList>
            <MenuItem>
              <Link to="/products/chairs">Chairs</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/tables">Tables</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products/tops">Dining Tops</Link>
            </MenuItem>
          </MenuList>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={"right"}>
              <Button
                component={Link}
                to="/checkout"
                variant="outlined"
                color="orange"
              >
                Checkout Now
              </Button>
            </Grid>
            {products.map((item, i) => (
              <Grid item xs={12} md={6} lg={3} key={i}>
                <Paper variant="outlined" className="card-product">
                  <Typography>{item.name}</Typography>
                  <Typography>${parseFloat(item.price).toFixed(2)}</Typography>
                  <Chip label={item.category} />
                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    color="orange"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                </Paper>
              </Grid>
            ))}
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
