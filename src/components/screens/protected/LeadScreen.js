import { useState } from "react";
import DefaultInput from "../../DefaultInput";
import SidebarView from "../../SideBar";
import { signUp_Lead } from "../../../handlers/register";
import CustomChecklist from "../../CustomChecklist";

const checkAllFalse = [false,false,false,false]

export default function SignUpLead() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [checklist, setChecklist] = useState(checkAllFalse)

    const resetStates = () =>
    {
        setName('')
        setPhone('')
        setEmail('')
        setChecklist(checkAllFalse)
    }

    return (
        <SidebarView screen={'newlead'}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 5 }}>
                <div style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <text style={{ fontSize: 40, }}>
                        Novo Lead
                    </text>
                </div>
                <div style={{ display: 'flex', flex: 4, flexDirection: 'row' }}>
                <div style={{ display: 'flex', flex: 1 }}/>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <DefaultInput value={name} placeholder="Nome" onChangeText={setName} />
                        <DefaultInput value={phone} placeholder="Telefone" onChangeText={setPhone} />
                        <DefaultInput value={email} placeholder="E-mail" onChangeText={setEmail} />
                        <div style={{paddingTop:15}}/>
                        <button onClick={() => {signUp_Lead(name,phone,email,checklist); resetStates()}}>Cadastrar</button>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingLeft: 25 }}>
                        <CustomChecklist useHook={[checklist, setChecklist]} />
                    </div>
                    <div style={{ display: 'flex', flex: 1 }}/>
                </div>
            </div>
        </SidebarView>
    )
}