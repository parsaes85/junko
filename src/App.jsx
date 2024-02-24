import React from "react";
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";

import "./App.css"

function App() {
  const router = useRoutes(routes);
  
  return (
    <div className="font-Yekan">
      <header>
        <Topbar />
        <Navbar />
      </header>
      {router}
    </div>
  );
}

export default App;
