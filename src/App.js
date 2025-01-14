import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import ShoppingList from './components/ShoppingList';
import CartPage from './components/CartPage';
import NavBar from './components/NavBar';

function App(){
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<ShoppingList />} />
              <Route path="/shop" element={<ShoppingList/>}/>
              <Route path="/cart" element={<CartPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
