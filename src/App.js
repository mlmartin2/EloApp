import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import SignUser from './screens/SignUserScreen';
import React, { useEffect } from 'react';
import { init_Database } from './database/manager';
import NewLeadScreen from './screens/NewLeadScreen';

function App() {
  useEffect(() =>
  {
    init_Database()
  },[])
  
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Login />} exact path="/login" />
      <Route element={<SignUser/>} path = "/signup" />
      <Route element={<NewLeadScreen/>} path ="/newlead"/>
      <Route element={<Home />} exact path="/" />
    </Routes>
  </BrowserRouter>
  )
}

const AppRoutes = () =>
{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} exact path="/login" />
        <Route element={<Home />} exact path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
