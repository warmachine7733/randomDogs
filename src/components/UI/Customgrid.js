import React from "react";

const Customgrid = () => {
  return (
    <>
      <div className="row" style="border:1px solid black;height:300px">
        <div className="col-6 col-md-3" style="border:1px solid black">
          <div className="row" style="border:1px solid black;height:50%">
            <div className="col">a</div>
          </div>
          <div className="row">
            <div className="col">b</div>
          </div>
        </div>
        <div className="col">
          <div className="row" style="border:1px solid black;height:70%">
            c
          </div>
          <div className="row" style="border:1px solid black;height:30%">
            <div className="col" style="border:1px solid black">
              d
            </div>
            <div className="col" style="border:1px solid black">
              e
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customgrid;
