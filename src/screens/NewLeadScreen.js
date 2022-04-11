import { Link } from 'react-router-dom'
import './styles/NewLead.css'

export default function NewLeadScreen() {
    return (
    <div className='RootStyle'>
        <head className='SideBar'>
            <div className='LogoContainer'>
                <img className="Logo" src={process.env.PUBLIC_URL + 'LogoEloFullUpdate.png'} />
            </div>
                <div className='SideButtonContainer'>
                    <div className='WORKAROUND_CenterItem'>
                        <Link className='SideBUttonContainer' to={'../'}>
                            <button className='SideButton ButtonGray'>LEADS</button>
                        </Link>
                    </div>
                    <button className='SideButton'> NOVO LEAD</button>
                    <Link to='../login'>
                        <button className='LogOutButton'>
                            SAIR
                        </button>
                    </Link>
                </div>
        </head>
        <body className='Page'>
            <text>def</text>
        </body>
    </div>
    )
  }