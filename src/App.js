import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import Signup from './components/signup';
import Home from './components/home';
import Insertproduct from './components/insertproduct';
import Allproduct from './components/showproduct';
import Pagenotfound from './components/pagenotfound';
import Login from './components/login'
import Todaysdeals from './components/todaysdeals';
import CategoryApi from './components/categoryapi';
import Categoryjson from './components/categoryjson';
import Logout from './components/logout';
import Crud from './components/crud';
import Update from './components/update';
import Add from './components/add'
import Cloths from './components/cloths'





function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/navbar' exact element={<Navbar />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/insertproduct' exact element={<Insertproduct />} />
        <Route path='/showproduct' exact element={<Allproduct />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='*' exact element={<Pagenotfound />} />
        <Route path='/todaysdeals' exact element={<Todaysdeals />} />
        <Route path='/categoryapi' exact element={<CategoryApi />} />
        <Route path='/categoryjson' exact element={<Categoryjson />} />
        <Route path='/logout' exact element={<Logout />} />
        <Route path='/crudpage' exact element={<Crud />} />
        <Route path='/update/:id' exact element={<Update />} />
        <Route path='/cloths' exact element={<Cloths />} />
        <Route path='/add' exact element={<Add />} />
        
      </Routes>





    </>
  );
}

export default App;
