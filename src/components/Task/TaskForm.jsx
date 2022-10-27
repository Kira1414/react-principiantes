import { useState, useRef, useEffect } from "react";
const TaskForm = ({addNewTask}) => {
    const inputName = useRef(null)
    const [taskName, setTaskName] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registrando")
    }
    
    const handleInputChange = (e) => {
        setTaskName(e.target.value)
    }

    const createNewTask = () => {
        addNewTask(taskName)
        setTaskName("")
    }

    useEffect(()=>{
        inputName.current.focus()
    })

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" ref={inputName} value={taskName} onChange={handleInputChange} name="name" className="form-control" />
            </div>
            <button type="submit" onClick={createNewTask} className="btn btn-primary">Add Task</button>
        </form>
    )
}

export default TaskForm