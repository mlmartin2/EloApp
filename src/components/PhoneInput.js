import { useState } from "react"

const PhoneInput = ({value, setValue}) =>
{
    const [phone, setPhone] = [value, setValue]

    function toPhoneString(val)
    {
        let phoneString = ''
        for(let i = 0; i < val.length; i++ )
        {
            if (i != 0) 
            {if(i==3) {phoneString += ')'} phoneString += val[i]} 
            else phoneString += '(' + val[i]
        }
        setPhone(phoneString)       
    }
    return (
        <input value={value} onChange={(e) => toPhoneString(e.target.value)} />
    )
}

export default PhoneInput