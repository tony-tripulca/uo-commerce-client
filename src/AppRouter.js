import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "./modules/not-found/NotFound";
import Homepage from "./modules/homepage/Homepage";
import Products from "./modules/products/Products";
import Checkout from "./modules/checkout/Checkout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
