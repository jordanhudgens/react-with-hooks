import React from "react";

export default (props) => {
  const { name, description } = props.item;
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};
