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
            <p className="">Lista de tareas</p>
            <input
                type="text"
                onChange={addTarea}
                className=""
                placeholder="What needs to be done?"
                onKeyDown={eventEnter}
                value={tarea}
            />
            <div className="listaDeTareas">
                <ol className="ol list-group list-group-flush estiloLista">
                  {listaTareas.map((task,index) => (
                    <li key={index} className="list-group-item li" >{`${task ==="" ? "No hay tareas pendientes" : task}`}<span className="span" onClick={() =>itemDelete(index)}>X</span></li>
                    ))}
                </ol>
                <p className="tareasPendientes">{`${listaTareas.length ===0 ? "No item left" : listaTareas.length+" item left"}`}</p> 
            </div> 
            </div>
        );
        };

export default AppTareas;
