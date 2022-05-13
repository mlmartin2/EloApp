import { useEffect, useState } from "react";
import DefaultInput from "../../components/DefaultInput";
import SidebarView from "../../components/SideBar";
import { opportunities } from "../../database/models";

const checkAllTrue = [true,true,true,true]
const checkAllFalse = [false,false,false,false]

const OpportunityCheckboxes = () => {

    const [checklist, setChecklist] = useState([false, false, false, false])
    const [checkAll, setCheckAll] = useState(false)

    useEffect(() => {
        if(checkAll) setChecklist(checkAllTrue)
    }, [checkAll])

    useEffect(() => {
        let trueCount = 0
        checklist.map((checkbox, index) => {
            if(checklist[index]) trueCount++
        })
        if(trueCount === checklist.length) setCheckAll(true)
        else setCheckAll(false)
    }, [checklist])

    const toggleChecklistItem = (index) => {
        let new_checklist = [...checklist]
        new_checklist[index] = !new_checklist[index]
        setChecklist(new_checklist)
    }

    const toggleAll = () =>
    {
        if(!checkAll) {setCheckAll(true); setChecklist(checkAllTrue)}
        else {setCheckAll(false); setChecklist(checkAllFalse)}
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
                        <input type='checkbox' checked={checklist[index]} onChange={() => toggleChecklistItem(index)}/>
                        <text>{key}</text>
                    </div>
                )
            })}
        </>
    )
}

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
                    <div style={{display:'flex', flex:1, flexDirection:'column', paddingLeft:25}}>
                    <OpportunityCheckboxes/>          
                    </div>
                    <div style={{display:'flex', flex:2}}>

                    </div>
                </div>
            </div>
        </SidebarView>
    )
}