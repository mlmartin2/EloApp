import '../styles/commons.css'

export default function DefaultInput({paddingTop = 10, secure = false, placeholder='', onChangeText })
{
    return (
        <input 
        style={{ textAlign: 'center', paddingTop: paddingTop }} 
        className='BottomBorder' 
        type={secure?'password':'text'} 
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)} />
    )
}