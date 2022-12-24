import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextCitasProvider from "./context/ContextCitas";
// import './index.css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextCitasProvider>
      <App />
    </ContextCitasProvider>
  </React.StrictMode>
);
