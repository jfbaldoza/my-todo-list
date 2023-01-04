import React from 'react'

const ShowInput = (props) => {
  const { taskList, task, idx, setTaskList } = props;

  const deleteTask = (delIdx) => {
    const newTaskList = taskList.filter((element)=>element.idx!==delIdx);{
      console.log(newTaskList);
    };

    setTaskList(newTaskList);
}

  return (
    <div>
      <ul>
        <li className='taskList'>
          <p className='task'>{task}</p>
          <button className='button-31' onClick={() => {deleteTask(idx);}}>x</button>
          </li>
      </ul>
    </div>
  )
}

export default ShowInput