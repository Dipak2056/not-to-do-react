import React from 'react'

export const TaskList = () => {
  return (
    <div>
         <div className="col-md-6 mb-5">
                <h2 className="text-center">Task List</h2>
                <hr/>
                <div className="list-items">
                 <table className="table table-striped w-100" >
                     <tbody id="task-list">
                        
                      </tbody>
                  </table>
                </div>
               </div>
    </div>
  )
}
