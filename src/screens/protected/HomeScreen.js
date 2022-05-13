import LeadsTable from "../../components/dnd/LeadsTable";
import SidebarView from "../../components/SideBar";
import { get_Dataset, get_Entry } from "../../database/manager";
import '../../styles/commons.css'

export default function Home() {
    const leads = get_Dataset('Leads', '*')

    const DEBUG_GetLeadStates = () =>
    {
        let states = []
        let dataset = get_Dataset('Leads', '*')
        Object.keys(dataset).map((key, index) => {
            states.push(dataset[key].state)
        })
        alert(states)
    }
    return (
        <SidebarView screen={'/'}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 4 }}>
                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <text style={{ fontSize: 40, borderBottomWidth: 1 }}>Leads Cadastrados</text>
                </div>
                <div style={{ display: 'flex', flex: 3 }}>
                    <LeadsTable />
                </div>
                <button onClick={() => DEBUG_GetLeadStates()}>DEBUG</button>
            </div>
        </SidebarView>
    )
}