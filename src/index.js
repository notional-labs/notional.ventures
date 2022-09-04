import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Snapshot from "./Body/Infrastructure/pages/Snapshot";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Endpoint from "./Body/Infrastructure/pages/Endpoint";
import ChainUpgrade from "./Body/Infrastructure/pages/ChainUpgrade";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="snapshot" element={<Snapshot />} />
                <Route path="endpoint" element={<Endpoint />} />
                <Route path="upgrade" element={<ChainUpgrade />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
