import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <AppRoutes/>
  )
}

const AppRoutes = () =>
{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} exact path="/login" />
        <Route element={<Home />} exact path="/" />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <text>abadoka</text>
  )
}

function Login()
{
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
            <div className='LoginInputContainer'><input id='usr' className='LoginInputItem' placeholder='Usuário' /></div>
            <div className='LoginInputContainer'><input id='psw' className='LoginInputItem' placeholder='Senha' /></div>
            <div className='SignInButtonContainer'><button className='ButtonDefault'> LOGIN </button></div>
            <div className='SignUpButtonContainer'><button className='ButtonDefault'> Cadastrar </button></div>
          </div>
        </body>
      </div>
    </div>
  )
}

function teste() {
  return (<text>abc</text>)
}

export default App;
