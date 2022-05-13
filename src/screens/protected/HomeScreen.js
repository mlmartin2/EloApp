import LeadsTable from "../../components/dnd/LeadsTable";
import LogoHeader from "../../components/LogoHeader";
import { get_Dataset, get_Entry } from "../../database/manager";

export default function Home() {
    const leads = get_Dataset('Leads', '*')

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 5 }}>
                <div style={{ flex: 1, textAlign: 'center', width: '100%', maxWidth: 210, minHeight: '100vh', backgroundColor: '#171b1c' }}>
                    <img style={{ width: '80%' }} src="/logoelo.png" />
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div style={{paddingTop:20}} />
                        <button style={{fontWeight:'bolder', fontSize:20, borderColor:'#0E1111',borderRadius:4, backgroundColor:'#171b1c'}}>
                            <text style={{color:'#ffffff'}}>
                                LEADS
                            </text>
                        </button>
                        <div style={{paddingTop:5}} />
                        <button style={{borderColor:'#0E1111',borderRadius:4, backgroundColor:'#171b1c'}}>
                            <text style={{fontWeight:'bolder', fontSize:20, color:'#ffffff'}}>
                                CADASTRAR LEAD
                            </text>
                        </button>
                    </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flex: 4 }}>
                    <div style={{display:'flex',flex:1,alignItems:'center'}}>
                    <text style={{fontSize:40, borderBottomWidth:1}}>Leads Cadastrados</text>
                    </div>
                    <div style={{display:'flex',flex:3}}>
                    <LeadsTable />
                    </div>
                </div>
            </div>
        </>
    )
}