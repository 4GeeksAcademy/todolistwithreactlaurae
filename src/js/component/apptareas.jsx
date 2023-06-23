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
               <ul> {listaTareas.map((task) => (
                    <li key={task.id}>{task.text}</li>
                    ))}</ul>

            }        
            //     nuevaTarea= tarea.map(value,index,array){
            //         return <li key={index}>{value}</li>
            //     }
            //   }
        }
        console.log(listaTareas)
        return (
            <div className="container">
            <p className="">todos</p>
            <input
                type="text"
                onChange={addTarea}
                className=""
                placeholder="What needs to be done?"
                onKeyDown={eventEnter}
            />
            </div>
        );
        };

export default AppTareas;
