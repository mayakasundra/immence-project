// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Categories from './Categories';

import List from './List';
import Details from './Details';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:strCategory" element={<List />} />
        <Route path="/:strCategory/:idMeal" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
