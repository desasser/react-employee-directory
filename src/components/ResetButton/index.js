import React from 'react';
import "./style.css";

export default function ResetButton({onClick}) {
  return (
    <div className="button-container">
      <button className="reset-button-style" onClick={onClick}>Clear Filters</button>
    </div>
  )
}
