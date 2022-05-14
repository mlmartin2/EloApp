import TableContainer from "./TableContainer"

const BorderStylesFromIndex = ["BorderlessLeft","BorderlessLeft BorderlessRight","BorderlessRight"] // mover p/ consts.js
const LeadStates = ['Cliente em Potencial', 'Dados Confirmados','Reunião Agendada'] // mover p/ consts.js


const TableHeader = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F1F1F1' }}>
            {BorderStylesFromIndex.map((style, index) => {
                return (<TableContainer className={"BorderlessBottom BorderlessTop "+style}>
                    <text style={{ fontWeight: 'bold', fontSize: 20 }}>{LeadStates[index]}</text>
                </TableContainer>)
            })}
        </div>
    )
}

export default TableHeader