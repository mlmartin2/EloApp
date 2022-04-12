import React from "react";
import LEAD from "./LEAD";
import { useDrop } from "react-dnd";
import { useState } from "react";

const LeadList =
[
    {state: 0,
    id: 0},
    {state : 0,
    id:1 },
    {state: 0,
    id:2 }
]

export default function DragDrop() 
{
    const [slots, setSlot] = useState([])

    const [{isOver}, drop] = useDrop(() =>
    ({
        accept: "LEAD",
        drop: (item) => addLeadToSlot(item.id),
        collect:(monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addLeadToSlot = (id) =>
    {
        
    }

    return (
        <>
            <div style={{ flexDirection: "row" }}>
                <div style={{ flex: 1, backgroundColor: isOver ? '#D8D6D6' : '#ffffff', border: '2px solid black', height: '40vh' }} className='Leads' ref={drop}>
                    {slots.map((lead) => {
                        return <LEAD id={lead.id} state={lead.state} />
                    })}
                </div>
            </div>
            <div style={{ bottom: '50%', position: 'absolute' }}>
                {LeadList.map((lead) => {
                    return <LEAD id={lead.id} state={lead.state} />
                })}
            </div>
        </>
    )
}