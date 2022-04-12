import { Link } from 'react-router-dom'
import './styles/Homev2.css'
import { DragDropContext, Doppable, Draggable } from 'react-beautiful-dnd'
import { find_Entry, get_Entry, get_TableObject } from '../database/manager'
import Projects from './DragTestScreen'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DragPreviewImage } from 'react-dnd'

const ItemTypes =
{
    LEAD:'lead'
}

function canDrop_TEST(){
    
}

export const BoardSquare = ({ x, y, children, game }) => {
    const [{ isOver, canDrop }, drop] = useDrop(
      () => ({
        accept: ItemTypes.LEAD,
        canDrop: () => canDrop_TEST(),
        drop: () => canDrop_TEST(),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        }),
      }),
      [],
    )
    const black = (x + y) % 2 === 1
    return (
      <div
        ref={drop}
        role="Space"
        style={{
          position: 'absolute',
          width: 100,
          height: 100,
          bottom: 10,
          backgroundColor:'#000000'
        }}
      >
      </div>
    )
  }

export const Lead = () => {
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: ItemTypes.LEAD,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }),
      [],
    )
    return (
      <>
        <DragPreviewImage connect={preview} src={process.env.PUBLIC_URL + 'LogoEloFullUpdate.png'} />
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          ♘
        </div>
      </>
    )
  }


export default function Homev2() {

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
                            <div className='LeadStateRowContainer'>
                                <text> Cliente em Potencial</text>
                            </div>
                        </div>
                        <div className='LeadStateItem'>
                        <div className='LeadStateRowContainer'>
                                <text> Dados Confirmados</text>
                            </div>
                        </div>
                        <div className='LeadStateItem'>
                        <div className='LeadStateRowContainer'>
                                <text> Reunião Agendada</text>
                            </div>
                        </div>
                    </div>
                    {mapLeads()}
                </div>
                <Lead/>
                <BoardSquare/>
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
                    <div className='LeadStateRowContainer'>
                        {columnItems[0]}
                    </div>
                </div>
                <div className='LeadStateItem'>
                    <div className='LeadStateRowContainer'>
                        {columnItems[1]}
                    </div>
                </div>
                <div className='LeadStateItem'>
                    <div className='LeadStateRowContainer'>
                        {columnItems[2]}
                    </div>
                </div>
            </div>
        )
        columnItems = []
    })

    return tableItems
}