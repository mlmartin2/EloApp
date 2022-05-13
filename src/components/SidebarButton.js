import { useNavigate } from "react-router-dom"

const SidebarButton = (props) =>
{
    const navigate = useNavigate()
    return (
        <button 
        onClick={() => navigate(props.navigateTo, {replace: true})}
        className={props.selected? 
            'Border BorderlessTop BorderlessLeft BorderlessRight':
            'Borderless'}
        disabled={props.selected}
        style={{ 
            fontWeight: 'bolder', 
            fontSize: 20, 
            borderColor: '#ffffff', 
            borderRadius: 4, 
            backgroundColor: '#171b1c', }}>
            <text 
            style={{ 
                color: props.selected? '#ffffff' : '#9E9E9E' }}>
                {props.text}
            </text>
        </button>
    )
}

export default SidebarButton