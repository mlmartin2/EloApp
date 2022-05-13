import { useDrop } from "react-dnd";
import LeadCard, { ItemTypes } from "./LeadCard";
import '../styles/styles.css'
const LeadCardContainer = (props) =>
{
    const[{isOver}, drop] = useDrop(() => ({
        accept:ItemTypes.LEADCARD,
        drop: () => alert('drop'),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <div
            ref={drop}
            className="Borders" 
            style={{
            minHeight:50,
            minWidth:50,
            borderWidth:1,
            borderColor:'#000000',
            backgroundColor: isOver? '#919191':'#ffffff'}}>
        {props.children}
        </div>
    )
}

export default LeadCardContainer