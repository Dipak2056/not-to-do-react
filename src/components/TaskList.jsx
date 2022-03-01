import React from 'react'

export const TaskList = ( {taskList} ) => {
  console.log(taskList);
  return (
    <div>
         <div className="col-md-6 mb-5">
                <h2 className="text-center">Task List</h2>
                <hr/>
                <div className="list-items">
                 <table className="table table-striped w-100" >
                     <tbody id="task-list">
                        {

                          taskList.map((item,i) => {
                            return <tr>
                            <td>
                                <input type="checkbox" />
                                {item.task}
                            </td>
                            <td> 
                            {item.hr} hr
                            </td>
                            <td class="text-end">
                                            <div class="btn btn-danger" title="Delete" onclick="deleteItem(${i})">
                                                <i class="fa-solid fa-trash-can" title="Delete"></i>
                                            </div>
                                            <div class="btn btn-warning " title="Mark" onclick="markAsNotToDo(${i})">
                                            <i class="fa-solid fa-circle-chevron-right"></i>
                                            </div>
                            </td>
                        </tr>
                          })
                        }
                      </tbody>
                  </table>
                </div>
               </div>
    </div>
  )
}
