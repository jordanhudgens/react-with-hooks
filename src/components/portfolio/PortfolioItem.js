import React from "react";

// <pre>{JSON.stringify(props.item, null, 2)}</pre>

export default (props) => {
  const { name, description, thumb_image_url, logo_url } = props.item;
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <img src={thumb_image_url} style={{ width: "100%" }} />
      <img src={logo_url} style={{ width: "100%" }} />
    </div>
  );
};
