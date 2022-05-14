import React, { useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { init_Database, post_Entry } from './database/manager.js'; // remover postentry
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { construct_User } from './database/constructors.js'; // remover 
import Login from './components/screens/LoginScreen';
import SignUp from './components/screens/SignUpScreen';
import Home from './components/screens/protected/HomeScreen';
import SignUpLead from './components/screens/protected/LeadScreen.js';

export const UserContext = createContext({})

function App() {

  const [user,setUser] = useState(null);

  useEffect(() =>
  {
    init_Database()
    let admin_user = construct_User('admin', 'admin')
    post_Entry('Users', admin_user)
  },[])

  return (
    <DndProvider backend={HTML5Backend}>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          {user ?
            <>
              <Route element={<Home />} exact path='/' />
              <Route element={<SignUpLead />} exact path='/newlead' />
            </>
            :
            <>
              <Route element={<Login />} exact path='/' />
              <Route element={<SignUp />} exact path='/signup' />
            </>}
        </Routes>
      </UserContext.Provider>
    </DndProvider>
  )
}

export default App;
