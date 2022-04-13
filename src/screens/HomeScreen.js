import './styles/Homev2.css'
import { Link } from 'react-router-dom'
import { get_TableObject, set_EntryData } from '../database/manager'
import { useEffect, useState } from 'react'
import DDTable from './TESTES/TESTE_DragDropTables'


export default function Home() {

    const [leads, setLeads] = useState()

    useEffect(() =>
    {
        setLeads(get_TableObject('Leads'))
    }, [])

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
                    {MapLeads()}
                </div>
            </body>
        </div>
    )
}



// teste de componente p/ rows de lead
// teste com hooks p/ update qdo click
function LeadRow({_lead})
{
    const [lead,setLead] = useState(_lead)
    let columnItems = ['','','']
    let newstate = lead.state + 1
    for(let i = 0; i < 3; i++)
    {
        if(lead.state == i) columnItems.push(
            <text onClick={ i == 2 ? '' : () => {
                set_EntryData('Leads', lead.key, 'state', newstate);}}>{lead.name}</text>
        )
        else columnItems.push(<text></text>)
    }

    return(
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
}

function MapLeads() {
    const table = get_TableObject('Leads')
    const keys = Object.keys(table)
    let tableItems = []
    let columnNames = ['','','']
    let columnItems = []
    let sts = []
    let leadobs = []
        function MouseOver(event) {
        event.target.style.background = '#D8D6D6';
      }
      function MouseOut(event){
        event.target.style.background="";
      }

    keys.map(key => {
        let item = table[key]
        leadobs.push(item)
        let newState = 0;
        newState = item.state + 1
        
        for(let i = 0; i < 5; i++)
        {
            if(item.state == i){
                columnNames[i] = item.name
                columnItems.push(
                    <text onMouseOver={(event) => MouseOver(event)} onMouseOut={(event) => MouseOut(event)} 
                    onClick={ i == 2 ? '' : () => set_EntryData('Leads', key, 'state', newState)} >{columnNames[i]}</text>
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