import React from "react";
import { BrowserRouter } from 'react-router-dom';
import SiteRoutes from './Routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
