import { useDrop } from "react-dnd";
import LeadCard, { ItemTypes } from "./LeadCard";
import '../styles/styles.css'
import { useEffect, useState } from "react";
const LeadCardContainer = (props) =>
{

    const[{isOver}, drop] = useDrop(() => ({
        accept:ItemTypes.LEADCARD,
        drop: () => props.onDrop(props.index) ,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <div
            ref={drop}
            className={props?.className} 
            style={{
            textAlign:'center',
            minHeight:30,
            minWidth:200,
            borderColor:'#000000',
            backgroundColor: isOver? '#DEDCDC':'#ffffff'}}>
        {props.children}
        </div>
    )
}

export default LeadCardContainer