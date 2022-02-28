import './App.css';

function App() {
  return (
    <>
    <div class="wrapper">
    <div class="container">
        {/* <!-- top-title  --> */}
        <div class="row">
            <div class="col text-center mt-5">
                <h1>
                  Time-management
                </h1>
                
            </div>
        </div>
        {/* <!-- form-area  --> */}
        <div class="row">
            <div class="col">
                <div class="form-box">
                 <form
                 onsubmit="handleOnSubmit(this)"
                 action="javascript:void(0)"
                 class="row row-cols-lg-auto d-flex justify-content-center g-3 align-items-center py-5">
                     <div class="col-12">
                       <label class="visually-hidden" for="inlineFormInputGroupUsername">Your-task</label>
                       <div class="input-group">
                         <input type="text" 
                         name = "task" 
                         class="form-control" id="task" 
                         required
                         placeholder="Your-task" />
                       </div>
                     </div>
                     <div class="col-12">
                         <label class="visually-hidden" for="inlineFormInputGroupUsername">Hours</label>
                         <div class="input-group">
                           <input type="number" name="hr" class="form-control" id="hour" 
                           required
                           placeholder="Hours" />
                         </div>
                       </div>
                   
                    
                     <div class="col-12">
                       <button type="submit" class="btn btn-primary">Add to Task List</button>
                     </div>
                   </form>
                </div>
            </div>
        </div>
        {/* <!-- list-areas  --> */}
        <div class="row">
            {/* <!-- goodlist-area  --> */}
            <div class="col-md-6 mb-5">
                <h2 class="text-center">Task List</h2>
                <hr/>
                <div class="list-items">
                 <table class="table table-striped w-100" >
                     <tbody id="task-list">
                        
                      </tbody>
                  </table>
                </div>
               </div>
            {/* <!-- badlist-area  --> */}
            <div class="col-md-6">
                <h2 class="text-center">Bad List</h2>
                <hr/>
                <div class="list-items">
                 <table class="table table-striped w-100" >
                     <tbody id="bad-list">
                     
                     </tbody>
                  </table>
                </div>
                <div class="ttl-bad text-end text-light">
                    Total time saved 
                    <span id="BadTotal">0</span>
                </div>
               
            </div>
          


    </div>
    <div class="row mt-5 py-2 fs-3 fw-bolder">
        <div class="col text-center text-black-80">
         Total time allocated this week 
         <span id="Total">0</span>
         hours.

        </div>
    </div>

</div>
</div>

</>
  );
}

export default App;
