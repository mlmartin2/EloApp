import './styles/Login.css'
import {Link, Navigate} from 'react-router-dom';
import React, {useState} from 'react';
import { find_Entry, get_Entry } from '../database/manager';
import auth from '../handlers/auth';

export default function Login()
{
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState()
  
  const LogSubmit = () =>
  {
    setLogged(auth(user, password))
    setUser('')
    setPassword('')
  }

  return (
    <div >
      <header className="App-header">
        <img className="Logo" src={process.env.PUBLIC_URL + 'LogoElo.png'} />
      </header>
      <div className='BodyContainer' >
        <body>
          <div className='PageTitleContainer'>
            <text className='PageTitle'>Login de Usuário</text>
          </div>
          <div className='LoginContainer'>
            <div className='LoginInputContainer'><input id='usr' value={user} onChange={(val) => setUser(val.target.value)} className='LoginInputItem' placeholder='Usuário' /></div>
            <div className='LoginInputContainer'><input id='psw' value={password} onChange={(val) => setPassword(val.target.value)} className='PasswordInputItem' type='password' placeholder='Senha' /></div>
            <div className='SignInButtonContainer'>
              {logged ? 
              <Navigate to='/home' replace>
              </Navigate> :
                <button className='ButtonGray' style={{padding: '5px 10px 5px 10px'}} onClick={() => LogSubmit()}>Login</button>}
            </div>
            <div className='SignUpButtonContainer'>
              <Link to='/signup'>
              <button style={{ color: '#ffffff', fontSize: '15px', }} className='ButtonDefault ButtonElo'>
                Cadastro
              </button>
              </Link>
            </div>
          </div>
        </body>
      </div>
    </div>
  )
}


function AuthError(index = -1)
{
  const authError = [
    'Senha não digitada',
    'Nome do usuário não digitado',
    'Usuário não encontrado',
    'Senha Inválida']
}
