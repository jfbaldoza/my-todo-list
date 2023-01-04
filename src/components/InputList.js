import React, { useState } from 'react';
import ShowInput from './ShowInput'

const InputList = (props) => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const createTask = (e) => {

        e.preventDefault();
        let newTask = {
            task,
            idx: Math.floor(Math.random() * 10000)
        }
        let taskArr = [...taskList, newTask]
        console.log(taskArr)
        setTaskList(taskArr);
        e.target.reset();
    }

    return (
        <div className='inputList'>
            <form onSubmit={ createTask }>
                <input className='inputBox' type="text" name="text" id="text" placeholder='Enter Task' onChange={(e) =>{setTask(e.target.value)} } />
                <input type="submit" value="Add" className='button-26' />
            </form>
            {
                taskList.map((element, index) => {
                    return <ShowInput
                    key={ index }
                    task={ element.task }
                    idx={ element.idx}
                    taskList={ taskList }
                    setTaskList={ setTaskList}
                    />
                })
            }
        </div>
    )
}

export default InputList