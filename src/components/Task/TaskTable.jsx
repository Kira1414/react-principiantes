import {useEffect,useState} from "react"
import TaskRow from "./TaskRow"
import TaskForm from "./TaskForm"

const initialState = [
    {id:1, name:"Aprender Programación", priority: 3, done: false},
    {id:2, name:"Practicar Sentencias Sql", priority: 2, done: false},
    {id:3, name:"Reposar La Espalda", priority: 2, done: true},
    {id:4, name:"Realizar Compras Semanales", priority: 1, done: false},
]
const TaskTable = ()=>{
    const headers = ["#", "Tasks", "Priority", "Done?"]
    const [tasks, setTasks] = useState([]);
    const headerStyle = {textAlign: "center", verticalAlign: "middle"}
    useEffect(()=>{
        setTasks(initialState)
    }, [])

    const addNewTask = (newTaskName) => {
        setTasks([...tasks, {id: tasks.length + 1, name: newTaskName, priority:1, done:false}])
    }

    const toggleTask = (id) => {
        setTasks(tasks.map((task)=>( task.id === id ) ? {...task, done:!task.done} : task))
    }

    return <div className="row">
        <div className="col-md-4">
        <TaskForm addNewTask={addNewTask} />
        </div>
        <div className="col-md-8">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                headers.map((header, index) => (
                                    <th style={headerStyle} key={index}>
                                        {header}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index)=>(
                            <TaskRow toggleTask={toggleTask} key={task.id} index={index} task={task}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default TaskTable;