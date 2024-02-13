

import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
};

export default Layout;
