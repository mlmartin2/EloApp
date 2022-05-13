import React, { useEffect } from "react";
import LEAD from "./LEAD";
import { useDrop } from "react-dnd";
import { useState } from "react"

const LeadList =
[
    {state: 0,
    id: 0}
]

export default function DragDrop({width, lead, itemindex = -1}) 
{
    const [slot, setSlot] = useState([])
    const [index, setIndex] = useState(itemindex)
    const [dropped, setDropped] = useState(false);
    
    useEffect(() =>
    {
        setSlot(lead)
    }, [])

    const [{isOver}, drop] = useDrop(() =>
    ({
        accept: "LEAD",
        drop: (item) => addLeadToSlot(item),
        collect:(monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    const addLeadToSlot = (lead) =>
    {
        let idx = lead.state + 1;
        alert(itemindex + ' ' + idx)
        if(itemindex == lead.state) alert('PROIBIDO: mesmo slot')
        else if(itemindex == lead.state + 2) alert('PROIBIDO: item pulado; não pode')
        else if(itemindex < lead.state) alert('PROIBIDO: Voltar p/ tras')
        else{
            alert('add to ' + itemindex + ' from ' + lead.state)
            const temp = <LEAD id={lead.id} state={idx} />
            setSlot(temp)
        }

    }

    return (
        <>
            <div>
                <div style={{backgroundColor: isOver ? '#D8D6D6' : '#ffffff', border: '2px solid black', height: '40vh', width:width }} className='Leads' ref={drop}>
                    {slot != undefined ? slot : 'nothing'}
                </div>
            </div>
        </>
    )
}

export function DebugList() 
{
    return(
        <div style={{ bottom: '50%', position: 'absolute' }}>
        {LeadList.map((lead) => {
            return <LEAD id={lead.id} state={lead.state} />
        })}
        </div>
    )

}