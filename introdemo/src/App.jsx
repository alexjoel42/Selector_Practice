import React from 'react';
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from './Components/Navbar'; // Make sure Navbar is in the correct path
import ExampleComponent from './Components/example_component';
import Test_Playground from "./pages/playground"; // Correct import for Test_Playground
import QA_Squad from './assets/QA_Squad.jpg'; // Image import
import './App.css';

function App() {
  return (
    <>
      <Navbar /> {/* Navbar for navigation */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              <h1>Thanks everyone for the great year!</h1>
              <img src={QA_Squad} alt="QA Squad" />
              <div className="Message">
                <code>To many more test suites and adventures!</code>
              </div>
            </div>
          }
        />
        {/* Playground Route */}
        <Route path="/playground" element={<Test_Playground />} />
      </Routes>
    </>
  );
}

export default App;