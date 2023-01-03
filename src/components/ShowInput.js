import React from 'react'

const ShowInput = (props) => {
  const { task } = props;

  return (
    <div>
      <ul>
        <li className='taskList'>
          <p className='task'>{task}</p>
          <button className='button-31'>x</button>
          </li>
      </ul>
    </div>
  )
}

export default ShowInput