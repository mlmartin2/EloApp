import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import SignUser from './screens/SignUserScreen';
import React, { useEffect, useState, useContext } from 'react';
import { init_Database } from './database/manager';
import NewLeadScreen from './screens/NewLeadScreen'; 
import Projects from './screens/DragTestScreen'; // temp 
import Homev2 from './screens/HomeScreenV2'; // temp
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop'; // temp?
import DDTable from './screens/TESTE_DragDropTables'; // temp
import { Navigate } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

function App() {

  const [user,setUser] = useState(null);
  useEffect(() =>
  {
    init_Database()
  },[])
  
  return(
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route element={<Login />} exact path="/" />
          <Route element={<SignUser />} path="/signup" />
          <Route element={<NewLeadScreen />} path="/newlead" />
          <Route element={<Home />} exact path="/home" />
          <Route element={<Homev2 />} path="/v2" />
          <Route path='*' element={<Navigate to={user ? '/home' : '/'} />} />
          <Route element={<Projects />} path="/testdrag" />
          <Route element={<DragDrop />} path="/dragdrop" />
          <Route element={<DDTable />} path="/ddtable" />
        </Route>
      </Routes>
    </DndProvider>
  )
}

export default App;
