import LeadsTable from "../../leads_table/LeadsTable";
import SidebarView from "../../SideBar";
import { get_Dataset } from "../../../database/manager";
import '../../styles/commons.css'
import { useState } from "react";
import LeadInfoBox from "../../LeadInfoBox";
import PhoneInput from "../../PhoneInput";

export default function Home() {
    const leads = get_Dataset('Leads', '*')
    const [selectedLead, setSelectedLead] = useState(null)

    return (
        <SidebarView screen={'/'}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 4 }}>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <text style={{ fontSize: 40, borderBottomWidth: 1 }}>Leads Cadastrados</text>
                </div>
                <div style={{flexDirection:'row', flex:3, display:'flex'}}>
                    <div style={{ display: 'flex', flex: 2 }}>
                        <LeadsTable setSelectedLead={setSelectedLead} />
                    </div>
                    <div style={{display:'flex', flex:1, justifySelf:'center' }}>
                        <div style={{position:'fixed', paddingLeft:50}}>
                            <LeadInfoBox leadId={selectedLead} />
                        </div>
                    </div>
                </div>
            </div>
        </SidebarView>
    )
}