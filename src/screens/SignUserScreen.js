import './styles/SignUser.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Auth from '../handlers/auth';
import React, { useState } from 'react';
import { signUp_User } from '../handlers/register';

export default function SignUser()
{
    const [user, setUser] = useState()
    const [pass, setPass] = useState()
    const [passConfirm, setPassConfirm] = useState()

    function handleSumbit()
    {
      signUp_User(user, pass, passConfirm)
      setUser('')
      setPass('')
      setPassConfirm('')
    }

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
            <div className='LoginInputContainer'><input value={user} onChange={(val) => setUser(val.target.value)} id='usr' className='LoginInputItem' placeholder='Novo Usuário *' /></div>
            <div className='SignUpContainer'><input type='password' id='psw' value={pass} onChange={(val) => setPass(val.target.value)} className='LoginInputItem' placeholder='Senha *' /></div>
            <div className='LoginInputContainer'><input type='password' value={passConfirm} onChange={(val) => setPassConfirm(val.target.value)} className='LoginInputItem' placeholder='Repetir Senha *' /></div>
            <div style={{ paddingTop: '10px' }}><text style={{ fontSize: '14px' }}>Campos com * são obrigatórios</text></div>
            <div className='SignInButtonContainer'>
              <button style={{ color: '#ffffff' }} onClick={() => handleSumbit()} className='ButtonDefault ButtonElo'>
                Cadastrar
              </button>
            </div>
            <div className='SignUpButtonContainer'>
              <Link to='/'>
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
