import React from "react";
export default function Link({ Children, href }) {
  return <a href={href}>{children}</a>;
}
