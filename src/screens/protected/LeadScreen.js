import { useEffect, useState } from "react";
import DefaultInput from "../../components/DefaultInput";
import SidebarView from "../../components/SideBar";
import { opportunities } from "../../database/models";
import { signUp_Lead } from "../../handlers/register";

const checkAllTrue = [true, true, true, true]
const checkAllFalse = [false, false, false, false]

const OpportunityCheckboxes = ({useHook}) => {

    const [checklist, setChecklist] = useHook
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        if (checkAll) setChecklist(checkAllTrue)
    }, [checkAll])

    useEffect(() => {
        let trueCount = 0
        checklist.map((checkbox, index) => {
            if (checklist[index]) trueCount++
        })
        if (trueCount === checklist.length) setCheckAll(true)
        else setCheckAll(false)
    }, [checklist])

    const toggleChecklistItem = (index) => {
        let new_checklist = [...checklist]
        new_checklist[index] = !new_checklist[index]
        setChecklist(new_checklist)
    }

    const toggleAll = () => {
        if (!checkAll) { setCheckAll(true); setChecklist(checkAllTrue) }
        else { setCheckAll(false); setChecklist(checkAllFalse) }
    }

    return (
        <>
            <div className='Borders BorderLeft BorderRight BorderTop'>
                <input checked={checkAll} onChange={() => toggleAll()} type='checkbox' />
                <text style={{ fontWeight: 'bold' }}>Serviços</text>
            </div>
            {Object.keys(opportunities).map((key, index) => {
                return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
                        <input type='checkbox' checked={checklist[index]} onChange={() => toggleChecklistItem(index)} />
                        <text>{key}</text>
                    </div>
                )
            })}
        </>
    )
}

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
                <div style={{ display: 'flex', flex: 3, flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                        <DefaultInput value={name} placeholder="Nome" onChangeText={setName} />
                        <DefaultInput value={phone} placeholder="Telefone" onChangeText={setPhone} />
                        <DefaultInput value={email} placeholder="E-mail" onChangeText={setEmail} />
                        <div style={{paddingTop:15}}/>
                        <button onClick={() => {signUp_Lead(name,phone,email,checklist); resetStates()}}>Cadastrar</button>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', paddingLeft: 25 }}>
                        <OpportunityCheckboxes useHook={[checklist, setChecklist]} />
                    </div>
                    <div style={{ display: 'flex', flex: 2 }}>
                    </div>
                </div>
            </div>
        </SidebarView>
    )
}