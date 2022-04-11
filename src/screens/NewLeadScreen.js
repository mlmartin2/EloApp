import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/NewLead.css'
import { opportunities } from '../database/models'
import { construct_Lead } from '../database/constructors'
import { signUp_Lead } from '../handlers/register'
import { get_TableObject } from '../database/manager'

export default function NewLeadScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [servs, setServs] = useState(opportunities)

    function TESTE()
    {
        let servs = []
        let keys = Object.keys(opportunities)
        for(let key = 0; key < keys.length; key++)
        {
            let serv = opportunities[keys[key]]
            //alert(serv)
            servs.push(
            <div className='ServiceContainer'>
                <input type='checkbox' value={opportunities[serv]} onChange={() => toggleServ(keys[key])} />
                <text className='WORKAROUND_paddingLeft'>{keys[key]}</text>

            </div>
            )
        }
        return servs;
    }

    function DEBUG_Leads()
    {
        const table = get_TableObject('Leads')
        let keys = Object.keys(table)
        
        alert(table[keys[0]].opportunities) 
    }

    const toggleServ = (servindex) =>
    {
        //alert(Object.values(opportunities))
        var svs = opportunities;
        alert(Object.values(svs) + " @NewLeadScreen . toggleServ() 1")
        alert(svs[servindex] + "@NewLeadScreen . toggleServ() 3/2")
        if(svs[servindex] == true) svs[servindex] = false;
        else svs[servindex] = true;
        setServs(svs)
        alert(Object.values(svs)  + " @NewLeadScreen . toggleServ() 2")
        // alert(svs[servindex])
    }

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
                <div className='FloatLeft'>
                    <div className='HeaderContainer'>
                        <text className='Title'>Cadastro de Lead</text>
                    </div>
                    <div className='SignLeadInput'>
                        <input onChange={(val)=> setName(val.currentTarget.value)} placeholder='Nome'></input>
                    </div>
                    <div className='SignLeadInput'>
                        <input onChange={(val) => setEmail(val.currentTarget.value)}  placeholder='E-Mail'></input>
                    </div>
                    <div className='SignLeadInput'>
                        <input onChange={(val) => setPhone(val.currentTarget.value)} placeholder='Telefone'></input>
                    </div>
                    <div className='SignLeadButton'>
                        <button onClick={(val) => signUp_Lead(name, phone, email, servs)}> Cadastrar </button>
                        <button onClick={() => DEBUG_Leads()} />
                    </div>
                </div>
                <div className='FloatRight'>
                    <div className='HeaderContainer'>
                        <text className='SubTitle'>Serviços</text>
                    </div>

                    {TESTE()}
                </div>
            </body>
        </div>
    )
  }



  //              <input type='checkbox' value={servs[0]} onChange={() => toggleServ(0)} />
//   <div className='ServiceContainer'>
//   <text>serviço 1</text>
//   <input type='checkbox' value={servs[0]} onChange={() => toggleServ(0)} />
// </div>
// <div className='ServiceContainer'>
//   <text>serviço 2</text>
//   <input type='checkbox' value={servs[1]} onChange={() => toggleServ(1)} />
// </div>
// <div className='ServiceContainer'>
//   <text>serviço 3</text>
//   <input type='checkbox' value={servs[2]} onChange={() => toggleServ(2)} />
// </div>
// <div className='ServiceContainer'>
//   <text>serviço 4</text>
//   <input type='checkbox' value={servs[3]} onChange={() => toggleServ(3)} />
// </div>