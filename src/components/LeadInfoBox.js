import { get_Entry } from "../database/manager"
import './styles/styles.css'
const LeadInfoBox = ({leadId}) =>
{
    const lead = get_Entry('Leads', 'id', leadId)

    return (
        <>
            {lead ?
                <div style={{ minWidth: '18vw', textAlign: 'center' }}>
                    <div className="Borders" style={{ paddingBottom: 15, paddingTop: 15, alignItems: 'center', }}>
                        <text style={{ fontSize: 30 }}>{lead?.name}</text>
                        <p />
                        {lead?.email}
                        <p />
                        {lead?.phone}
                    </div>
                </div> :
                null}
        </>
        // <div style={{minWidth:'18vw', textAlign:'center'}}>
        //     {lead?
        //     <div className="Borders">
        //         <text style={{fontSize:30}}>{lead.name}</text>
        //         <p/>
        //         {lead.email}
        //         <p/>
        //         {lead.phone}
        //     </div> 
        //     :
        //         <div style={{ minWidth:'15vw', borderWidth:1, borderColor:'#ffffff', borderStyle:'solid'}}>                
        //             <text>
        //             aaa
        //             </text>
        //         </div>}
        // </div>
    )
}

export default LeadInfoBox