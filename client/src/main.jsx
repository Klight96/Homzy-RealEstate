import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-6eujm6e6a2ft8lzq.us.auth0.com"
     clientId="hcVnsPsa3bfvezBN0h1cHYy7QcF3mrf4"
     authorizationParams={{
      redirect_uri: "http://localhost:5173"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);


// dev-03ifqltxbr6nn0hn.us.auth0.com
// RXlGXkr49Ev5MHpvAC6vKkZ4bVn11iwl

// https://full-stack-real-estate-{}-sooty.vercel.app