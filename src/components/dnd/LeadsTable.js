import { get_Dataset } from "../../database/manager";
import TableContainer from "../TableContainer";
import LeadRow from "./LeadRow";
import { leadStates } from "../../database/models";


export default function LeadsTable()
{
    const leads = get_Dataset('Leads', '*')
    
    const map_leadstoRows = () =>
    {
        let keys = Object.keys(leads)
        let leads_table = []
        leads_table.push(
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor:'#F1F1F1' }}>
                <TableContainer className='BorderlessTop BorderlessLeft'>
                    <text style={{fontWeight:'bold', fontSize: 20 }}>{leadStates[0]}</text>
                </TableContainer>
                <TableContainer className="BorderlessLeft BorderlessRight BorderlessTop">
                    <text style={{fontWeight:'bold', fontSize: 20 }}>{leadStates[1]}</text>
                </TableContainer>
                <TableContainer className='BorderlessTop BorderlessRight'>
                    <text style={{fontWeight:'bold', fontSize: 20 }}>{leadStates[2]}</text>
                </TableContainer>
            </div>
        )
        for(let i = 0; i < keys.length; i++)
        {   
            let className = 'BorderlessTop'
            if(i == 0) className = ''
            else if(i == keys.length - 1) className += ' BorderlessBottom'
            leads_table.push(<LeadRow className={className} currentLead={leads[keys[i]]} />)
        }
        return (leads_table)
    }

    return (
        <div>
            {map_leadstoRows()}
        </div>
    )
}