import '../styles/styles.css'
export default function TableContainer(props)
{
    return (
        <div
            className={"Borders " + props.className}
            style={{
            textAlign:'center',
            minHeight:30,
            minWidth:200,
            borderColor:'#000000'}}>
        {props.children}
        </div>
    )
}