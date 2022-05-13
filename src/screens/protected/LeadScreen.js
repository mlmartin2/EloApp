import { useState } from "react";
import DefaultInput from "../../components/DefaultInput";
import SidebarView from "../../components/SideBar";

export default function SignUpLead()
{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <SidebarView screen={'newlead'}>
            <div style={{display:'flex', flexDirection:'column',flex:5}}>
                <div style={{flex:2, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <text style={{fontSize:40,}}>
                        Novo Lead
                    </text>
                </div>
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <DefaultInput placeholder="Nome" onChangeText={setName} />
                        <DefaultInput placeholder="Telefone" onChangeText={setPhone} />
                        <DefaultInput placeholder="E-mail" onChangeText={setEmail} />
                    </div>
                    <div style={{display:'flex', flex:2, flexDirection:'column', paddingLeft:25}}>
                        CHECKBOXES VEM AQUI
                    </div>
                </div>
            </div>
        </SidebarView>
    )
}