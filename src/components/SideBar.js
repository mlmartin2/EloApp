import { useContext } from "react"
import { UserContext } from "../App"
import SidebarButton from "./SidebarButton"

export default function SidebarView(props) {
    const [user,setUser] = useContext(UserContext) 
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 5 }}>
                <div style={{ flex: 1, textAlign: 'center', width: '100%', maxWidth: 210, minHeight: '100vh', backgroundColor: '#171b1c' }}>
                    <img style={{ width: '60%' }} src="/logoelo.png" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ paddingTop: 20 }} />
                        <SidebarButton selected={props.screen == '/'? true : false} className='Border BorderlessTop BorderlessLeft BorderlessRight' text='Leads' navigateTo={'/'} />
                        <SidebarButton selected={props.screen == 'newlead'? true : false} className='Borderless' text='Cadastrar Lead' navigateTo={'/newlead'}/>
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <button 
                        style=
                        {{display:'flex', 
                        bottom:50, 
                        position:'absolute',
                        backgroundColor:'#171b1c',
                        borderWidth:1,
                        borderColor:'#FF0000',
                        borderStyle:'solid'}} onClick={() => setUser(null)}>
                            <text style={{color:'#FF0000', fontSize:20}}>
                            LOGOUT
                            </text>
                        </button>
                        </div>
                        <div style={{ paddingTop: 5 }} />
                    </div>
                </div>
                {props.children}
            </div>
        </>
    )
}