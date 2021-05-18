import React, { useState } from 'react'
import {isEmpty, size} from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [editMode, seteditMode] = useState(false)
  const [id, setId] = useState("")
  const  [error, setError] = useState(null)

  //Add Task
  const addTask = (e) => {
    e.preventDefault();
    if (isEmpty(task)) {
      //console.log("Empty")
      setError("Debes ingresar una tarea")
      return
    }
    const newTask = {
      id: shortid.generate(),
      name: task
    }
    setTasks([...tasks, newTask])
    setTask("")
  }
  
  //Delete Task
  const deleteTask = (id) => {
    const filteredTask = tasks.filter(task => task.id !== id)
    setTasks(filteredTask)
  }

  //Edit Task
  const editTask = (theTask) => {
    setTask(theTask.name)
    seteditMode(true)
    setId(theTask.id)
  }


  //Save Edited Task
  const saveTask = (e) => {
    e.preventDefault();
    if (isEmpty(task)) {
      console.log("Empty")
      return
    }

    //console.log(tasks)
    const editedTasks = tasks.map(x => x.id === id ? { id, name: task} : x)
    //console.log(editedTasks)
    setTasks(editedTasks)
    seteditMode(false)
    setTask("")
    setId("")
  }
  
  return (
    <div className="container">
      <h1>Tasks</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">List</h4>
          {size(tasks) === 0 ? (
            <h5 className="text-center"> No hay tareas programadas</h5>
          ) : (
            <ul className="list-group"> {/* listado de tareas */}
              {tasks.map((task) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name} </span>
                  <button
                    className="mx-2 btn btn-danger btn-sm float-right"
                    onClick={() => deleteTask(task.id)} 
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editTask(task)} 
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {editMode ? "Edit Task" : "Add Task"}
          </h4>
{/* inicio form */}
          <form onSubmit={editMode ? saveTask : addTask}> 
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Insert task..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
            />
            <button type="submit" 
            className={editMode ? "btn btn-warning btn-block" : "btn btn-dark btn-block"}>               {editMode ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
