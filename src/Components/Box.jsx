import React from "react";

function Box(props) {
  return (
    <div className="font-semibold">
      <div>
        <p>{props.type}</p>
      </div>
      <div className="flex justify-between space-x-10">
        <p>{props.stat}</p>
        <p>{props.base_stat}</p>
      </div>
      <div>
        <p>{props.ability}</p>
      </div>
    </div>
  );
}

export default Box;
