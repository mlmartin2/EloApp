import React, { useState, useEffect } from "react";

const CheckBox = (check) =>
{
    const [checked, setChecked] = useState(false)
    useEffect(() =>
    {
        setChecked(check)
    }, [])
    
    return (
        <div>
            <input type='checkbox' checked={check} />
        </div>
    )
}