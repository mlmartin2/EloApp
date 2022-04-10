import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <div >
      <header className="App-header">
        <img className="Logo" src={process.env.PUBLIC_URL + 'LogoElo.png'} />
      </header>
      <div className='BodyContainer' >
        <body className='Body'>
          {teste()}
        </body>
        <body className='BodyHalf'>
          <text>adwoakdpoak</text>
        </body>
      </div>
    </div>
  );
}

function teste() {
  return <text>abc</text>
}

export default App;
