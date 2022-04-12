import React, { useState } from "react"
import { useDrag } from "react-dnd"

// Componente p/ lead 'arrastável'
export default function LEAD({id, state})
{
    const[leadstate, setLeadstate] = useState(state)

    const [{isDragging}, drag] = useDrag(() => ({
        type: "LEAD",
        item:{id:id, state:state},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(), 
        }),
    }) );
    return <text ref={drag} style={{border: isDragging ? "5px solid red" : "1px solid black"}}>DRAG</text>
}