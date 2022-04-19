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
    const [checkboxes, setCheckboxes] = useState([false,false,false,false])
    const [ops, setOps] = useState(opportunities)
    const [checkall, setCheckall] = useState(false)

    useEffect(() => {
        let truecount = 0
        for(let i = 0; i < checkboxes.length; i++) 
        {
            if(checkboxes[i] == true) truecount++;
        }
        if(truecount == checkboxes.length) setCheckall(true)
        else setCheckall(false)
    }, [checkboxes])

        function gen_CheckBoxes(prevbox)
    {
        let servsarray = []
        let keys = Object.keys(opportunities)
        let cboxes = [...checkboxes]
        //alert('gen_CheckBoxes(): ' + checkboxes)
        for(let key = 0; key < checkboxes.length; key++)
        {
            servsarray.push(
            <div className='ServiceContainer'>
                <input id={Math.random()} key={Math.random()} type='checkbox' checked={prevbox[key]} onChange={(e) => toggleServ(e, key)} />
                <text className='WORKAROUND_paddingLeft'>{keys[key]}</text>
            </div>
            )
        }
        return servsarray;
    }

    const toggleServ = (event, servindex) =>
    {
        let svs = [...checkboxes]
        svs[servindex] = !svs[servindex] 
        setCheckboxes(svs)
    }

    function ToggleAll() {
        let ops = checkboxes;
        let selectAll = false
        let trueCount = 0
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] == true) {trueCount++; selectAll = true }
        }
        if(trueCount == checkboxes.length) selectAll = false;
        else if(trueCount == 0) selectAll = true;
        for (let i = 0; i < checkboxes.length; i++){
            ops[i] = selectAll; 
        }
        setCheckall(selectAll)
        setCheckboxes(ops)
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
                        <button onClick={(val) => signUp_Lead(name, phone, email, checkboxes)}> Cadastrar </button>
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
                        onChange={() =>ToggleAll()}
                        checked={checkall}/>
                    </div>
                    {gen_CheckBoxes(checkboxes)}
                </div>
            </body>
        </div>
    )
  }

  const CheckBox = ({keyname, changeHandle, isCheck}) =>
  {
      const [checked,setChecked] = useState(isCheck)

      return(
        <div className='ServiceContainer'>
            <input type='checkbox' checked={checked} onChange={changeHandle} />
            <text className='WORKAROUND_paddingLeft'>{keyname}</text>
        </div>
      )
  }