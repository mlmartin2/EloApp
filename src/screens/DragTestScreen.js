import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// FUNC P LIDAR COM REORDER (DESNECESSARIO P MIM (OU N))
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

// ARRAY C DADOS (DESNECESSARIO)
const Arr = [
    {
        name: "North",
        key: "12353",
        color:"#000000"
    },
    {
        name: "South",
        key: "23463",
        color:"#ffffff"
    },
    {
        name: "East",
        key: "54643",
        color:"#ffffff"
    },

]


// MAIN
const Projects = () => {
    const [project, setProject] = useState(Arr) // decl. estado p/ array anterior

    const onDragEnd = (result) => {
        if (!result.destination) return; // se nao há destino, retornar
        if (result.destination.index === result.source.index) return; // se indice do destino == indice da origem, retornar
        else if(result.destination.index < result.source.index
            || result.destination.index > result.source.index + 1) return;
        const projects = reorder( // analisar reorder 
            project,
            result.source.index,
            result.destination.index
        );
        //redef. estado ( fazer estado p renderização qdo drop)
        setProject(projects)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}> 
            <Droppable direction='horizontal' droppableId="list">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={{display:'flex', flexDirection:'row', border: "1px solid #ffffff", opacity: 0.5, borderRadius: "5px" }}
                    >
                        {project && project.map((item, index) =>
                            <Draggable draggableId={item.key} key={item.key} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div style={{border: '1px black solid', width:'60px', alignSelf:'center'}}>
                                            <p style={{ color: item.color }}>{item.name}</p>
                                        </div>
                                    </div>
                                )}
                            </Draggable>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
export default Projects