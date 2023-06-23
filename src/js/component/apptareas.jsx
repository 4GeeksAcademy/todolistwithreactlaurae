import React, { useState } from "react";

const AppTareas = () => {
  // Declaración de estados
        const [tarea, setTarea] = useState("");
        const [listaTareas, setListaTareas] = useState([]);

    // Asignar evento on-change y vincular
        const addTarea = (e) => {
            setTarea(e.target.value);
        };
        const eventEnter = (e) =>{
            if(e.key === 'Enter') {
                 console.log(tarea)
               setListaTareas(listaTareas.concat(tarea));
               setTarea("")
               
        }}
        const itemDelete = (index) => {
            const newArr = listaTareas.filter((param, i) => i !== index);
            setListaTareas(newArr);
          };
           
        return (
            <div className="container">
            <p className="">todos</p>
            <input
                type="text"
                onChange={addTarea}
                className=""
                placeholder="What needs to be done?"
                onKeyDown={eventEnter}
                value={tarea}
            />
            <div className="listaDeTareas">
                <ol className="ol list-group list-group-flush estiloLista"> {listaTareas.map((task,index) => (
                    <li key={index} className="list-group-item" id="li">{task}<button type="button" className="btn-close botonCerrar"  onClick={() =>itemDelete(index)}></button></li>
                    ))}</ol> 
            </div> 
            </div>
        );
        };

export default AppTareas;
