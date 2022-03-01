import React from "react";

export const TotalHours = ({ total }) => {
  return (
    <div>
      <div className="row mt-5 py-2 fs-3 fw-bolder">
        <div className="col text-center text-black-80">
          Total time allocated this week
          <span id="Total">{total}</span>
          hours.
        </div>
      </div>
    </div>
  );
};
