
import React,{useState} from "react";
import Route from "./routes";
import {BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route/>
    </BrowserRouter>
  );
}

export default App;
