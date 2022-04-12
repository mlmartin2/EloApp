import './styles/Login.css'
import { BrowserRouter, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Auth from '../components/Auth';
import React, {useState} from 'react';
import { find_Entry, get_Entry } from '../database/manager';
import auth from '../handlers/auth';

export default function Login()
{
  const [user, setUser] = useState('')
  const [password, setPassword] = useState()

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
            <div className='LoginInputContainer'><input id='usr' onChange={(val) => setUser(val.target.value)} className='LoginInputItem' placeholder='Usuário' /></div>
            <div className='LoginInputContainer'><input id='psw' onChange={(val) => setPassword(val.target.value)} className='LoginInputItem' placeholder='Senha' /></div>
            <div className='SignInButtonContainer'>
              <button onClick={() => alert('a')}>Login</button>
            </div>
            <div className='SignUpButtonContainer'>
              <Link to='/signup'>
                <button style={{color:'#ffffff', fontSize: '15px', }} className='ButtonDefault ButtonElo'>
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

function Teste(username = '', password = '')
{//aJXHw28*273v
  let error = false
  //alert(username)
  const userid = find_Entry('Users', 'name', username)
  let user = get_Entry('Users', userid);
  if(password == '' || username == '') {error = true; alert('Usuário ou senha em branco')}
  else if( user == undefined || user.password != password) {error = true; alert('Usuário ou senha inválida')}
}

function AuthError(index = -1)
{
  const authError = [
    'Senha não digitada',
    'Nome do usuário não digitado',
    'Usuário não encontrado',
    'Senha Inválida']
  //alert(authError[index])
}