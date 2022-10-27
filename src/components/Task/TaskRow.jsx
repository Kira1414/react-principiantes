import "./style.css"
const TaskRow = ({task, index, toggleTask}) => {
    const priorities = ["Low", "Middle", "High"]
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td>{priorities[task.priority - 1]}</td>
            <td>
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
            </td>
        </tr>
    )
}

export default TaskRow