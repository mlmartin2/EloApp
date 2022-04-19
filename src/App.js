// React imports
import React, { useEffect, useState, useContext, createContext } from 'react';
// Routes
import { Route, Routes } from 'react-router-dom';
// Screens
import Login from './screens/LoginScreen';
import Home from './screens/HomeScreen';
import NewLeadScreen from './screens/NewLeadScreen'; 
import SignUser from './screens/SignUserScreen';
// db manager
import { init_Database } from './database/manager';
// drag&drop
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// prototipo drag&drop
import DDTable from './screens/TESTES/TESTE_DragDropTables';
import RequireAuth from './components/RequireAuth';

export const UserContext = createContext({})

function App() {

  const [user,setUser] = useState(null);

  useEffect(() =>
  {
    init_Database()
  },[])

  useEffect(() =>
  {
    alert('main :' + user)
  }, [user])
  
  return (
    <DndProvider backend={HTML5Backend}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route element={<Login />} exact path="/" />
          <Route element={<SignUser />} path="/signup" />
          <Route element={<RequireAuth />}>
            <Route element={<NewLeadScreen />} path="/newlead" />
            <Route element={<Home />} exact path="/home" />
          </Route>
          <Route element={<DDTable />} path="/ddtable" />
        </Routes>
      </UserContext.Provider>
    </DndProvider>
  )
}

export default App;
