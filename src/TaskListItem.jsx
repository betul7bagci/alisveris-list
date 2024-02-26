import React from 'react'


function TaskListItem({ item, editTask, removeTask, doneTask }) {
    return (
        <>
            <li className={`list-group-item ${item.isDone && 'bg-success bg-gradient'}`}
                key={item.uuid}>
                {item.priority && <span
                    className='badge text-bg-danger me-2'>Acil İhtiyaçlar </span>}
                {item.task}
                <div className='btn-group float-end' role="group">

                    <button onClick={() => doneTask(item.uuid)}
                        className='btn btn-sm btn-outline-success float-end rounded'>Alındı</button>
                        
                        <span style={{ margin: '0 5px' }}> </span>

                    <button onClick={() => editTask(item.uuid)}
                        className='btn btn-sm btn-outline-info float-end rounded'>Güncelle</button>

                        <span style={{ margin: '0 5px' }}> </span>


                    <button onClick={() => removeTask(item.uuid)}
                        className='btn btn-sm btn-outline-danger float-end rounded'>Sil</button>
                </div>
            </li>
        </>
    )
}

export default TaskListItem