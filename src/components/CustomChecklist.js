import { useState, useEffect } from "react"
import { opportunities } from "../database/models"

const checkAllTrue = [true, true, true, true]
const checkAllFalse = [false, false, false, false]

const CustomChecklist = ({useHook}) => {

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

export default CustomChecklist