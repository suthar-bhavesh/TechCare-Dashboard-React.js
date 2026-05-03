import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const basename = window.location.hostname.includes("github.io")
  ? "/TechCare-Dashboard-React.js/"
  : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
);

console.log("Current Basename", basename);
