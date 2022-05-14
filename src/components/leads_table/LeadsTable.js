import { get_Dataset } from "../../database/manager";
import LeadRow from "./LeadRow";
import TableHeader from "./TableHeader";

export default function LeadsTable()
{
    const leads = get_Dataset('Leads', '*')

    return (
        <div>
            <TableHeader />
            {Object.keys(leads).map((key, index) => {
            return (<LeadRow classname={''} currentLead={leads[key]} />)})}
        </div>
    )
}