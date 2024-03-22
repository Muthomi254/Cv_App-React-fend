import React from 'react';
import NavBar from '..Layout/NavBar'; // Assuming NavBar is in NavBar.js
import Footer from '..Layout/Footer'; // Assuming Footer is in Footer.js

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
