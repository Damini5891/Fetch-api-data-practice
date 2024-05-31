import React from "react";

export default function ProductList(props) {
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "20px" }}>
      <h4>{props.title}</h4>
      <h4>{props.price}</h4>
    </div>
  );
}
