import React from "react";
import { createRoot } from "react-dom/client";



const Crypto = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Etherium"),
    React.createElement("h2", {}, "ETH"),
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Liste des cryptos"),
    React.createElement(Crypto),
    React.createElement(Crypto),
    React.createElement(Crypto),
  ])
}

const container = document.getElementById("app")
const root = createRoot(container);
root.render(React.createElement(App))
