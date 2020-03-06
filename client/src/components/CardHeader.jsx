import React from "react"

export default function CardHeader({ children }) {

  console.log('children');
  
  return (
    <h5 className="card-header">{children}</h5>
  );
}
