import './styles/SignUser.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Auth from '../handlers/auth';
import React, { useState } from 'react';
import signUp from '../handlers/register';

export default function SignUser()
{
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [passConfirm, setPassConfirm] = useState()

  return (
    <div >
      <header className="App-header">
        <img className="Logo" src={process.env.PUBLIC_URL + 'LogoElo.png'} />
      </header>
      <div className='BodyContainer' >
        <body>
          <div className='PageTitleContainer'>
            <text className='PageTitle'>Cadastro de Usuário</text>
          </div>
          <div className='LoginContainer'>
            <div className='LoginInputContainer'><input onChange={(val) => setUser(val.target.value)} id='usr' className='LoginInputItem' placeholder='Novo Usuário' /></div>
            <div className='SignUpContainer'><input id='psw' onChange={(val) => setPass(val.target.value)} className='LoginInputItem' placeholder='Senha' /></div>
            <div className='LoginInputContainer'><input id='cpsw' onChange={(val) => setPassConfirm(val.target.value)} className='LoginInputItem' placeholder='Repetir Senha' /></div>
            <div className='SignInButtonContainer'>
                <button onClick={() => signUp(user, pass, passConfirm)}  className='ButtonDefault ButtonElo'>
                  Cadastrar
                </button>
            </div>
            <div className='SignUpButtonContainer'>
                <Link to='/login'>
                    <button className='ButtonDefault ButtonGray'>
                        Voltar 
                    </button>
                </Link>
            </div>
          </div>
        </body>
      </div>
    </div>
  )
}
