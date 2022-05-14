import '../styles/commons.css'
import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../components/LogoHeader';
import DefaultInput from '../components/DefaultInput';
import auth from '../handlers/auth';
import LeadCard from '../components/dnd/LeadCard';
import LeadCardContainer from '../components/dnd/LeadCardContainer';

export default function Login()
{
  const [user, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  function reset_states()
  {
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <LogoHeader />
      <body>
        <div style={{justifyContent:'center', textAlign:'center'}}>
          <button disabled>Sign In</button>
          <button onClick={() => navigate('../signup', {replace: true})}>Sign Up</button>
        </div>
        <div style={{paddingTop:25}} className='LoginInputContainer'>
          <DefaultInput value={username} onChangeText={setUsername} placeholder='Nome'/>
          <DefaultInput value={password} onChangeText={setPassword} placeholder='Senha' secure />
          <div style={{paddingTop:25}} />
          <button onClick={() => {reset_states(); setUser(auth(username, password))}} style={{borderWidth:'1'}}>Login</button>
        </div>
      </body>
    </>
  )
}


