import React, { useEffect } from "react"
import { useDrag } from "react-dnd"

export const ItemTypes =
{
    LEADCARD:'LeadCard'
}

const LeadCard = ({leadName, onClick}) =>
{

    const [{isDragging}, dragRef] = useDrag(() => ({
        type: leadName,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    }))

    return (
        <div
        onClick={onClick}
        ref={dragRef}
        style ={{
        textAlign:'center',
        cursor: 'move'}}>
            {isDragging ? '' : leadName}
        </div>
    )
}

export default LeadCard