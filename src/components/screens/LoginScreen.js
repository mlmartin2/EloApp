import '../styles/commons.css'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import LogoHeader from '../LogoHeader';
import DefaultInput from '../DefaultInput';
import authUser from '../../handlers/auth';

export default function Login() {
  const [user, setUser] = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  function reset_states() {
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <LogoHeader />
      <body>
        <div style={{paddingTop:15, display:'flex', justifyContent: 'center', textAlign: 'center', flexDirection:'row' }}>
          <div style={{minWidth: 150, backgroundColor:'#ffffff', border:'#FFD032'}}>
            <button disabled
              style={{borderWidth: 0, textAlign:'center' }} >
              <text style={{fontWeight:'bolder',color:'#FFD032',textAlign:'center', fontSize: 20 }}>
                Login
              </text>
            </button>
          </div>
          <div style={{minWidth: 150}}>
            <button style={{ borderWidth: 0, paddingLeft: 10, backgroundColor: '#ffffff' }}
              onClick={() => navigate('../signup', { replace: true })}>
              <text style={{ fontSize: 20, }}>
                Cadastro
              </text>
            </button>
          </div>
        </div>
        <div style={{ paddingTop: 25 }} className='LoginInputContainer'>
          <DefaultInput value={username} onChangeText={setUsername} placeholder='Nome' />
          <DefaultInput value={password} onChangeText={setPassword} placeholder='Senha' secure />
          <div style={{ paddingTop: 25 }} />
          <button
            onClick={() => {
              reset_states();
              setUser(authUser(username, password))
            }}
            style={{ borderWidth: '1' }}>
            Login
          </button>
        </div>
      </body>
    </>
  )
}


