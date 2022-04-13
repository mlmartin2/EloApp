import DragDrop, { DebugList } from "../../components/DragDrop";
import LEAD from "../../components/LEAD";
// prototipo com react-dnd
export default function DDTable({lead})
{
    const _lead = <LEAD state={0} id={1234123}/>

    return(
        <div>
            <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
                <div style={{display:'flex', flex:1}}>
                    <DragDrop width={300} lead={lead} itemindex={0}  />
                </div>
                <div style={{display:'flex', flex:1}} >
                    <DragDrop width={300} itemindex={1}/>
                </div>
                <div style={{display:'flex', flex:1}} >
                    <DragDrop width={300} itemindex={2}/>
                </div>
            </div>
        </div>
    )
}