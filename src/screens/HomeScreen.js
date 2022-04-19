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

        function MouseOver(event, color = '') {
            event.target.style.background = color;
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
                        <div className='LeadStateItem' style={{justifySelf:'center', alignSelf:'center'}} >
                            <text style={{ cursor: 'pointer' }}
                                onMouseOver={(event) => MouseOver(event, '#D8D6D6')}
                                onMouseOut={(event) => MouseOut(event)}
                                onClick={i == 2 ? '' : () => handleChangeState(key)} >
                                {columnNames[i]}
                            </text>
                        </div>
                    )
                }
                else if (i < item.state) {
                    columnItems.push(
                        <div className='LeadStateItem'
                        onMouseOver={(e) => MouseOver(e, '#bfff75')}
                        onMouseOut={(e) => MouseOut(e)}>
                            <img style={{ width: 25, height: 25, display: 'flex', alignSelf: 'center', justifySelf: 'center' }}
                                src={process.env.PUBLIC_URL + 'check.png'} />
                        </div>
                    )
                }
                else {
                    columnItems.push(
                        <div className='LeadStateItem'>
                            <text></text>
                        </div>
                    )
                }
            }
            tableItems.push(
                <div style={{alignContent:'center', justifyContent:'center', alignItems:'center', justifyItems:'center'}} className='LeadStatesContainer'>
                        {columnItems[0]}
                        {columnItems[1]}
                        {columnItems[2]}
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



