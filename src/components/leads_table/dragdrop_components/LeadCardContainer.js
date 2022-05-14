import { useDrop } from "react-dnd";
import { ItemTypes } from "./LeadCard";
import '../../styles/styles.css'

const LeadCardContainer = (props) =>
{

    const[{isOver}, drop] = useDrop(() => ({
        accept:props.type,
        drop: () => props.onDrop(props.index),
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
            backgroundColor: !isOver?  '#ffffff' : props.canDrop(props.index)? '#E3FCDC' : '#FDE8E8'}}>
        {props.children}
        </div>
    )
}

export default LeadCardContainer