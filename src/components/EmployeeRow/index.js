import React from 'react';
import "./style.css";

export default function Employee({ details }) {
  return (
      <tr>
        <td>
          <img src={details.picture.thumbnail} />
        </td>
        <td>{details.name.first}</td>
        <td>{details.name.last}</td>
        <td>{details.login.username}</td>
        <td>{details.email}</td>
        <td>{details.phone}</td>
        {/* <td>{details.hireDate}</td> */}
      </tr>
  )
}