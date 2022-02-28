import React from 'react'

export const BadList = () => {
  return (
    <div>
         <div className="col-md-6">
                <h2 className="text-center">Bad List</h2>
                <hr/>
                <div className="list-items">
                 <table className="table table-striped w-100" >
                     <tbody id="bad-list">
                     
                     </tbody>
                  </table>
                </div>
                <div className="ttl-bad text-end text-light">
                    Total time saved 
                    <span id="BadTotal">0</span>
                </div>
               
            </div>
    </div>
  )
}
