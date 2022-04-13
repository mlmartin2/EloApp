import './styles/Homev2.css'
import { Link } from 'react-router-dom'
import { get_TableObject, set_EntryData } from '../database/manager'
import { useState } from 'react'


export default function Home() {

    const [states, setStates] = useState([])

    return (
        <div className='RootStyle'>
            <head className='SideBar'>
                <div className='LogoContainer'>
                    <img className="Logo" src={process.env.PUBLIC_URL + 'LogoEloFullUpdate.png'} />
                </div>
                <div className='SideButtonContainer'>
                    <button className='SideButton'>LEADS</button>
                    <Link to='../newlead'>
                        <button className='SideButton ButtonGray'> NOVO LEAD</button>
                    </Link>
                    <Link to='../'>
                        <button className='LogOutButton'>
                            SAIR
                        </button>
                    </Link>
                </div>
            </head>
            <body className='HomePage'>
                <div className='HeaderContainer'>
                    <text className='Title'>LEADS</text>
                    <text className='SubTitle'>Cadastrados</text>
                </div>
                <div>
                    <div className='LeadStatesContainer'>
                        <div className='LeadStateItem'>
                            <text> Cliente em Potencial</text>
                        </div>
                        <div className='LeadStateItem'>
                            <text> Dados Confirmados</text>
                        </div>
                        <div className='LeadStateItem'>
                            <text> Reunião Agendada</text>
                        </div>
                    </div>
                    {mapLeads()}
                </div>
            </body>
        </div>
    )
}

function mapLeads() {
    const table = get_TableObject('Leads')
    const keys = Object.keys(table)
    let tableItems = []
    let columnNames = ['','','']
    let columnItems = []
    let sts = []
    keys.map(key => {
        let item = table[key]
        let newState = 0;
        newState = item.state + 1
        //alert(newState)
        for(let i = 0; i < 5; i++)
        {
            if(item.state == i){
                columnNames[i] = item.name
                columnItems.push(
                    <text onClick={() => {set_EntryData('Leads', key, 'state', newState)}}>{columnNames[i]}</text>
                )
            }
            else{
                columnItems.push(
                    <text></text>
                )
            }
            sts.push(item.state)
        }
        tableItems.push(
            <div className='LeadStatesContainer'>
                <div className='LeadStateItem'>
                    {columnItems[0]}
                </div>
                <div className='LeadStateItem'>
                    {columnItems[1]}
                </div>
                <div className='LeadStateItem'>
                    {columnItems[2]}
                </div>
            </div>
        )
        columnItems = []
    })
    return tableItems
}