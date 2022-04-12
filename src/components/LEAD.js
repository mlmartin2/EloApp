import React from "react"
import { useDrag } from "react-dnd"

export default function LEAD({id, state})
{
    const [{isDragging}, drag] = useDrag(() => ({
        type: "LEAD",
        item:{id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(), 
        }),
    }) );
    return <text ref={drag} style={{border: isDragging ? "5px solid red" : "1px solid black"}}>DRAG</text>
}