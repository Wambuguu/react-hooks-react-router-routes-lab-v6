import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes"; 

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  </BrowserRouter>
);
