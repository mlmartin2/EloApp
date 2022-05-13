import React from "react"
import { useDrag } from "react-dnd"

export const ItemTypes =
{
    LEADCARD:'LeadCard'
}

const LeadCard = ({leadName}) =>
{
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.LEADCARD,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    }))

    return (
        <div
        ref={drag}
        style ={{
        textAlign:'center',
        cursor: 'move'}}>
            {isDragging ? '' : leadName}
        </div>
    )
}

export default LeadCard