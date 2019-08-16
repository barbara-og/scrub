import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TweetsView from "../components/TweetsView";

function Dashboard(selectedFile, setSelectedFile) {
  function tester() {
    console.log("dashboard selected file", selectedFile);
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2, border: "solid black 5px" }}>
        <button name="test" onClick={() => tester()} />
        <Sidebar />
      </div>
      <div style={{ flex: 6, border: "solid black 5px" }}>
        <TweetsView />
      </div>
    </div>
  );
}

export default Dashboard;
