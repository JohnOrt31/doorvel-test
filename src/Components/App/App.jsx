import React from "react";
import AmenitiesParentView from "../AmenitiesParentView/AmenitiesParentView";
import AmenitiesChildsView from "../AmenitiesChildsView/AmenitiesChildsView";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const App = (props) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AmenitiesParentView />} />
        <Route path="/amenidades/:id" element={<AmenitiesChildsView />} />
      </Routes>
    </Router>
  );
};

export default App;
