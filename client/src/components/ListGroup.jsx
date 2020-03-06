import React from "react";

export function Ul({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function Li({ children }) {
  return <li className="list-group-item">{children}</li>;
}
