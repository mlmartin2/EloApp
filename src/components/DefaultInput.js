import '../styles/commons.css'

export default function DefaultInput({secure = false, placeholder='', onChangeText, paddingTop=10 })
{
    return (
        <>
        <div style={{paddingTop:paddingTop}} />
        <input 
        style={{ textAlign: 'center'}} 
        className="Borders"
        type={secure?'password':'text'} 
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)} />
        </>

    )
}