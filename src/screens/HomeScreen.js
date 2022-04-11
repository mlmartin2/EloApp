import { Link } from 'react-router-dom'
import './styles/Home.css'
import { DragDropContext } from 'react-beautiful-dnd'
import { useDrag } from 'react-dnd'
import { Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'

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
            <body className='Page'>
                <div className='HeaderContainer'>
                    <text className='Title'>LEADS</text>
                    <text className='SubTitle'>Cadastrados</text>
                </div>

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

                <div className='LeadStatesContainer'>
                    <div className='LeadStateItem'>
                        <text> Cl1</text>
                    </div>
                    <div className='LeadStateItem'>
                        <text></text>
                    </div>
                    <div>
                        <text></text>
                    </div>
                </div>
            </body>
        </div>
    )
  }

  function TestDrag()
  {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.LEAD,
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

      return(
          <div ref={drag} style={{cursor:'move'}}>
              <text>aoiwdawodad</text>
          </div>
      )
  }