import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./context/theme";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<ThemeProvider><App /></ThemeProvider>, document.getElementById("root"));
