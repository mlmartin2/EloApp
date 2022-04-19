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

    function handleChangeState(key) {
        let updatedleads = {...leads}
        updatedleads[key].state++;
        let nst = updatedleads[key].state;
        set_EntryData('Leads', key, 'state', nst )
        setLeads(updatedleads)
    }

    function MapLeads() {
        if(leads == undefined || leads == null) return;
        const keys = Object.keys(leads)
        let tableItems = []
        let columnNames = ['', '', '']
        let columnItems = []

        function MouseOver(event) {
            event.target.style.background = '#D8D6D6';
        }
        function MouseOut(event) {
            event.target.style.background = "";
        }

        keys.map(key => {
            let item = leads[key]
            let newState = 0;
            newState = item.state + 1

            for (let i = 0; i < 3; i++) {
                if (item.state == i) {
                    columnNames[i] = item.name
                    columnItems.push(
                        <text style={{cursor:'pointer'}} onMouseOver={(event) => MouseOver(event)} onMouseOut={(event) => MouseOut(event)}
                            onClick={i == 2 ? '' : () => handleChangeState(key)} >{columnNames[i]}</text>
                    )
                }
                else if ( i < item.state)
                {
                    columnItems.push(
                        <img style={{width:25, height:25, display:'flex', alignSelf:'center', justifySelf:'center'}} src={process.env.PUBLIC_URL + 'check.png'} />
                    )
                }
                else {
                    columnItems.push(
                        <text></text>
                    )
                }
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



