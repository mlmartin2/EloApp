import LeadsTable from "../../leads_table/LeadsTable";
import SidebarView from "../../SideBar";
import { get_Dataset } from "../../../database/manager";
import '../../styles/commons.css'

export default function Home() {
    const leads = get_Dataset('Leads', '*')

    return (
        <SidebarView screen={'/'}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 4 }}>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <text style={{ fontSize: 40, borderBottomWidth: 1 }}>Leads Cadastrados</text>
                </div>
                <div style={{ display: 'flex', flex: 3 }}>
                    <LeadsTable />
                </div>
            </div>
        </SidebarView>
    )
}