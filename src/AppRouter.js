import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NotFound from "./modules/not-found/NotFound";
import Homepage from "./modules/homepage/Homepage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}
