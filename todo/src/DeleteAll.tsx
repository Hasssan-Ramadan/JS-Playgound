import React from 'react'
import './DeleteAll.css'

const DeleteAll = ({
  tasks,
  setTasks,
}: {
  tasks: { id: number; title: string; isActive: boolean }[]
  setTasks: (a: { id: number; title: string; isActive: boolean }[]) => void
}) => {
  const handleClick = () => {
    const filteredTasks = tasks.filter((task) => task.isActive)
    for (let i = 0; i < filteredTasks.length; i++) {
      filteredTasks[i].id = i + 1
    }
    setTasks(filteredTasks)
  }
  return (
    <div className='delete-all-container'>
      <button className='delete-all-btn' onClick={handleClick}>
        <span className='material-icons-outlined'>delete</span>
        <p>delete all</p>
      </button>
    </div>
  )
}

export default DeleteAll