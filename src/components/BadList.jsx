import React from "react";

export const BadList = ({
  badList,
  markAsTask,
  handleOnDeleteBadList,
  ttlBadHours,
}) => {
  return (
    <div>
      <div className="col-md-6">
        <h2 className="text-center">Bad List</h2>
        <hr />
        <div className="list-items">
          <table className="table table-striped w-100">
            <tbody id="bad-list">
              {badList.map((item, i) => {
                return (
                  <tr>
                    <td>
                      <input type="checkbox" />
                      {item.task}
                    </td>
                    <td>{item.hr} hr</td>
                    <td class="text-end">
                      <div class="btn btn-danger" title="Delete">
                        <i
                          class="fa-solid fa-trash-can"
                          title="Delete"
                          onClick={() => handleOnDeleteBadList(i)}
                        ></i>
                      </div>
                      <div
                        class="btn btn-warning "
                        title="Mark"
                        onClick={() => markAsTask(i)}
                      >
                        <i class="fa-solid fa-circle-chevron-left"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ttl-bad text-end text-light">
          Total time saved:
          <span id="BadTotal"> {ttlBadHours}</span>
        </div>
      </div>
    </div>
  );
};
