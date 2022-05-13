import { useState } from "react"
import LeadCard from "./LeadCard"
import LeadCardContainer from "./LeadCardContainer"
import '../styles/styles.css'
import { edit_Entry, post_Entry } from "../../database/manager"

const BorderStylesFromIndex =
{
    0:"BorderlessLeft",
    1:"BorderlessLeft BorderlessRight",
    2:"BorderlessRight"
}

const LeadRow = ({currentLead, className}) =>
{
    const [lead, setLead] = useState(currentLead)
    const [state,setState] = useState(currentLead.state)

    const onDrop = (newState) =>
    {
        if(newState == lead.state + 1)
        {
            let temp_lead = lead
            temp_lead.state = lead.state + 1
            setLead(temp_lead)
            setState(lead.state)
            post_Entry('Leads', temp_lead)
            return true
        }

        return false
    }

    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            {[0,1,2].map((i) => {
                return (
                    <LeadCardContainer 
                    onDrop={onDrop} 
                    index={i}
                    className={"Borders " + BorderStylesFromIndex[i] + ' ' + className}>
                        {lead.state == i ? <LeadCard leadName={lead.name} /> : ''}
                    </LeadCardContainer>                    
                )
            })}
        </div>
    )

}

export default LeadRow