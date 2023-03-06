import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import "./style.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Home />);
