import React from 'react'
import "./style.css";

export default function Search({name, onChange, value}) {
  return (
    <form className="form-style">
      <input name={name} onChange={onChange} value={value} className="input-style" placeholder="search by first name..."/>
    </form>
  )
}
