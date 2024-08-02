import React from "react";

function AlertBox({ text }) {
  return <div className="bg-red-300 px-3 py-4 md:px-4 md:py-5 rounded">{text}</div>;
}

export default AlertBox;
