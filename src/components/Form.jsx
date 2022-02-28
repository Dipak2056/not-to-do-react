import React from 'react'

export const Form = () => {
  return (
    <div>
         <div className="row">
            <div className="col">
                <div className="form-box">
                 <form
                 onsubmit="handleOnSubmit(this)"
                 action="javascript:void(0)"
                 className="row row-cols-lg-auto d-flex justify-content-center g-3 align-items-center py-5">
                     <div className="col-12">
                       <label className="visually-hidden" for="inlineFormInputGroupUsername">Your-task</label>
                       <div className="input-group">
                         <input type="text" 
                         name = "task" 
                         className="form-control" id="task" 
                         required
                         placeholder="Your-task" />
                       </div>
                     </div>
                     <div className="col-12">
                         <label className="visually-hidden" for="inlineFormInputGroupUsername">Hours</label>
                         <div className="input-group">
                           <input type="number" name="hr" className="form-control" id="hour" 
                           required
                           placeholder="Hours" />
                         </div>
                       </div>
                   
                    
                     <div className="col-12">
                       <button type="submit" className="btn btn-primary">Add to Task List</button>
                     </div>
                   </form>
                </div>
            </div>
        </div>
    </div>
  )
}
