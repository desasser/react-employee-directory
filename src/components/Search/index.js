import React from 'react'

export default function Search({name, onChange, value, submitForm}) {
  return (
    <form>
      <input name={name} onChange={onChange} value={value}></input>
    </form>
  )
}
