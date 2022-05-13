import '../styles/commons.css'

export default function DefaultInput({secure = false, placeholder='', onChangeText, value, paddingTop=10 })
{
    return (
        <>
        <div style={{paddingTop:paddingTop}} />
        <input 
        style={{ textAlign: 'center'}} 
        className="Borders"
        value = {value}
        type={secure?'password':'text'} 
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)} />
        </>

    )
}