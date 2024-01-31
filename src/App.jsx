import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/Context.jsx";
function App() {
  return (
    <ContextProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:23" element={<Movie />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
   
  );
}

export default App;
