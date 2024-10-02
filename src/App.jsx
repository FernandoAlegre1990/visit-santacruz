import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FoodAndDrink from './pages/FoodAndDrink';
import ThingsToDo from './pages/ThingsToDo'
import Destinations from './pages/Destinations';
import Planning from './pages/Planning'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodAndDrink />} />
        <Route path="/things" element={<ThingsToDo />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/plans' element={<Planning />} />
        {/* Agrega otras rutas aquí */}
      </Routes>
    </>
  );
}

export default App;