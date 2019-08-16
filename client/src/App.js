import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import Dashboard from "./containers/Dashboard";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div>
      <div className="banner">
        <h3>Scrub</h3>
      </div>
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(selectedFile, setSelectedFile) => (
            <LandingPage
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          )}
        />
        <Route
          exact
          path="/dashboard"
          render={(selectedFile, setSelectedFile) => (
            <Dashboard
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
          )}
        />
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
