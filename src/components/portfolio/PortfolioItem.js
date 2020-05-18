import React from "react";

export default (props) => {
  const { title, description } = props.item;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};
