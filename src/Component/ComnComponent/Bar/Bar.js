import React from "react";

const Bar = (props) => {
  const styleh2 = {
    padding: "10px",
    background: "#FFFFFF",
  };
  return (
    <div>
      <h2 style={styleh2}>{props.name}</h2>
    </div>
  );
};

export default Bar;
