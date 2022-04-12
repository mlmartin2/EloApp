import React, { useEffect } from "react";
import LEAD from "./LEAD";
import { useDrop } from "react-dnd";
import { useState } from "react";

// Componente p/ zonas destino de itens arrastáveis

export default function DragDrop({width, lead, itemindex = -1}) 
{
    const [slot, setSlot] = useState([])

    useEffect(() =>
    {
        // Inicialização do slot (inicial (indice: 0) sempre fornecido)
        setSlot(lead)
    }, [])

    const [{isOver}, drop] = useDrop(() =>
    ({
        accept: "LEAD",
        // Descobrir como remover item da tabela após func. ser chamada
        drop: (item) => addLeadToSlot(item),
        collect:(monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    
    // Condicionais p/ mover leads ao longo dos slots
    // 1 - Não pode mover para tras
    // 2 - Não pode mover para o mesmo slot
    // 3 - Não pode mover mais de uma posição por vez
    const addLeadToSlot = (lead) =>
    {
        let idx = lead.state + 1;
        alert(itemindex + ' ' + idx)
        if(itemindex == lead.state) alert('PROIBIDO: mesmo slot')
        else if(itemindex == lead.state + 2) alert('PROIBIDO: item pulado; não pode')
        else if(itemindex < lead.state) alert('PROIBIDO: Lead não pode voltar pra trás')
        else{
            alert('add to ' + itemindex + ' from ' + lead.state)
            const temp = <LEAD id={lead.id} state={idx} />
            setSlot(temp)
        }
    }

    return (
        <>
            <div>
                <div style={{backgroundColor: isOver ? '#D8D6D6' : '#ffffff', border: '2px solid black', height: '40vh', width:width }} className='Leads' ref={drop}>
                    {slot != undefined ? slot : 'nothing'}
                </div>
            </div>
        </>
    )
}
