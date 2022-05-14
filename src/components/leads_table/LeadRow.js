import { useEffect, useState } from "react"
import LeadCard from "./dragdrop_components/LeadCard"
import LeadCardContainer from "./dragdrop_components/LeadCardContainer"
import '../styles/styles.css'
import { post_Entry } from "../../database/manager"

const BorderStylesFromIndex = // mover p consts
['BorderlessLeft', 'BorderlessLeft BorderlessRight', 'BorderlessRight']

const LeadRow = ({currentLead, className}) =>
{
    const [lead, setLead] = useState(currentLead)
    const [leadState,setLeadState] = useState(currentLead.state)

    const canDrop = (newState) =>
    {
        if(newState == lead.state + 1) return true
        return false
    }

    const onDrop = (newState) =>
    {
        if(canDrop(newState))
        {
            let temp_lead = lead
            temp_lead.state = lead.state + 1
            setLead(temp_lead)
            setLeadState(lead.state)
            post_Entry('Leads', temp_lead)
            return true
        }
        return false
    }

    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            {BorderStylesFromIndex.map((style_item, index) => {
                return (
                    <LeadCardContainer 
                    onDrop={onDrop}
                    canDrop={canDrop}
                    type={lead?.name} 
                    index={index}
                    className={"Borders " + style_item + ' ' + className}>
                        {lead.state == index ? <LeadCard leadName={lead.name} /> : ''}
                    </LeadCardContainer>                    
                )
            })}
        </div>
    )

}

export default LeadRow