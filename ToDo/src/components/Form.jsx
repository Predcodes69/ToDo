import React from 'react'
import useTaskStore from '../TaskStore'
const Form = () => {
    const style = {
        formcontainer:`flex items-center justify-center h-20 w-[30rem]`,
        input:`w-[19rem] h-10 border-2 border-gray-300 rounded-md bg-gray-300 shadow-md pl-[1rem] mr-[1rem]`,
        button:`w-20 h-10 border-2 border-black rounded-lg flex items-center justify-center bg-gradient-to-b from-transparent to-slate-300`
    }
    const {addTask, tasks} = useTaskStore(state=>{
        return{
            addTask:state.addTask,
            tasks:state.tasks
        }
    })
    const [task, setTask] = React.useState('');
    const handleClick = () =>{
        addTask({
            id:tasks.length + 1,
            task:task,
            completed:false
        }),
        setTask('')
    }
  return (
    <>
    <div className = {style.formcontainer}>
            <form className = 'flex'>
                <input className = {style.input} type = 'text' placeholder = 'Enter Task' onChange = {(e) => {
                    setTask(
                        prevTask => {
                            return e.target.value
                        }
                    )
                }} />
                <button className = {style.button} type = 'submit' onClick = {() => handleClick()}>Add Task</button>
            </form>
        </div>
    </>
  )
}

export default Form