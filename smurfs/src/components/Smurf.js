import React from "react";

const Smurf = props => {
  return (
    <div>
      Name: {props.smurf.name}, Age: {props.smurf.age}, Height:{" "}
      {props.smurf.height}
    </div>
  );
};

export default Smurf;
