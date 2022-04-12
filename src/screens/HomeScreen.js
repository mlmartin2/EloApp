import { Link } from 'react-router-dom'
import './styles/Home.css'
import { DragDropContext, Doppable, Draggable } from 'react-beautiful-dnd'
import { get_TableObject } from '../database/manager'

const ItemTypes =
{
    LEAD:'lead'
}

export default function Home() {
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
                    <Link to='../login'>
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
    keys.map(key => {
        let item = table[key]
        for(let i = 0; i < 5; i++)
        {
            if(item.state == i) columnNames[i] = item.name

            if(item.state == i){
                columnItems.push(
                    <text onClick={() => alert('asaa')}>{columnNames[i]}</text>
                )
            }
            else{
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