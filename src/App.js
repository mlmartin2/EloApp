import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import SignUser from './screens/SignUserScreen';
import React, { useEffect } from 'react';
import { init_Database } from './database/manager';
import NewLeadScreen from './screens/NewLeadScreen';
import Projects from './screens/DragTestScreen';
import Homev2 from './screens/HomeScreenV2';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from './components/DragDrop';
import DDTable from './screens/TESTE_DragDropTables';

function App() {
  useEffect(() =>
  {
    init_Database()
  },[])
  
  return(
    <DndProvider backend={HTML5Backend}>
    <BrowserRouter>
    <Routes>
        <Route element={<Login />} exact path="/login" />
        <Route element={<SignUser />} path="/signup" />
        <Route element={<NewLeadScreen />} path="/newlead" />
        <Route element={<Home />} exact path="/" />
        <Route element={<Projects />} path="/testdrag" />
        <Route element={<Homev2 />} path="/v2" />
        <Route element={<DragDrop/>} path="/dragdrop"/>
        <Route element={<DDTable/>} path="/ddtable" />
    </Routes>
  </BrowserRouter>
    </DndProvider>

  )
}

export default App;
