import './styles/NewLead.css'
import './styles/Login.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { opportunities } from '../database/models'
import { signUp_Lead } from '../handlers/register'
import { get_TableObject } from '../database/manager'

export default function NewLeadScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [servs, setServs] = useState(opportunities)
    const [leads, setLeads] = useState({})
    const [checkboxes, setCheckboxes] = useState([false,false,false,false])

    function gen_CheckBoxes()
    {
        let servsarray = []
        let keys = Object.keys(opportunities)
        for(let key = 0; key < keys.length; key++)
        {
            let serv = opportunities[keys[key]]
            servsarray.push(
            <div className='ServiceContainer'>
                <input id={key} key={keys[key]} type='checkbox' value={checkboxes[key]} onChange={(e) => toggleServ(keys[key])} />
                <text className='WORKAROUND_paddingLeft'>{keys[key]}</text>

            </div>
            )
        }
        return servsarray;
    }

    const toggleServ = (servindex) =>
    {
        var svs = opportunities;
        if(svs[servindex] == true) svs[servindex] = false;
        else svs[servindex] = true;
        setServs(svs)
    }

    // Funcionando ( Falta update na screen)
    function ToggleAll() {
        let ops = servs;
        let keys = Object.keys(servs)
        let selectAll = false
        let trueCount = 0
        for (let i = 0; i < keys.length; i++) {
            if (servs[keys[i]] == true) {trueCount++; selectAll = true }
        }
        if(trueCount == keys.length) selectAll = false;
        else if(trueCount == 0) selectAll = true;
        for (let i = 0; i < keys.length; i++){
            ops[keys[i]] = selectAll; 
        }
        alert(Object.values(ops))
        setServs(ops)
    }

    return (
        <div className='RootStyle'>
            <head className='SideBar'>
                <div className='LogoContainer'>
                    <img className="Logo" src={process.env.PUBLIC_URL + 'LogoEloFullUpdate.png'} />
                </div>
                <div className='SideButtonContainer'>
                    <Link to='../home'>
                    <button className='SideButton ButtonGray'>LEADS</button>
                    </Link>
                    <button className='SideButton '> NOVO LEAD</button>
                    <Link to='../'>
                        <button className='LogOutButton'>
                            SAIR
                        </button>
                    </Link>
                </div>
            </head>
            <body className='LeadPage'>
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
                    </div>
                </div>
                <div className='FloatRight'>
                    <div className='HeaderContainer'>
                        <text className='SubTitle'>Serviços</text>
                    </div>
                    <div className='MasterCheckBox'>
                        <input 
                        style={{borderWidth:'1px', 
                        borderColor:'#000000', 
                        borderStyle:'solid'}} 
                        type='checkbox'
                        onClick={() =>ToggleAll()}/>
                    </div>
                    {gen_CheckBoxes()}
                    <button onClick={() => alert(Object.values(servs))} />
                </div>
            </body>
        </div>
    )
  }
