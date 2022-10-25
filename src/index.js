import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Error from "./404";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="snapshot" element={<Snapshot />} />
          <Route exact path="snapshot/:id" element={<Snapshot showModal={true}/>} />
          <Route exact path="endpoint" element={<Endpoint />} />
          <Route exact path="upgrade" element={<ChainUpgrade />} />
          <Route exact path="stake/:id" element={<App showModal={true} />} />
          <Route exact path="404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
