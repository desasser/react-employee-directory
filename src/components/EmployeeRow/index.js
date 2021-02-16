import React from 'react';
import "./style.css";

export default function Employee({details}) {
  return (
    <div>
      <tr>
        <td>{details.picture.thumbnail}</td>
        <td>{details.name.first}</td>
        <td>{details.name.last}</td>
        <td>{details.email}</td>
        <td>{details.login.username}</td>
        <td>{details.phone}</td>
        {/* <td>{details.hireDate}</td> */}
      </tr>
    </div>
  )
}