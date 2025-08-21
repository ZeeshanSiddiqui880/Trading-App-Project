import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import "react-toastify";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);
