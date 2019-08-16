import React from "react";

function Sidebar() {
  return (
    <div display="flex">
      <div>
        <h2> I am a sidebar</h2>
        <input type="text" placeholder="keywords" />
        <input type="submit" value="Search" />
      </div>
    </div>
  );
}

export default Sidebar;
