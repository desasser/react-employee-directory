import React from 'react'
import "./style.css";

export default function index(props) {
  return (
    <table>
      <thead>
        <tr>
          <th> Picture </th>
          <th onClick={props.sortFirstName} className="clickable" style={{color:"#BB4430"}}> First Name </th>
          <th> Last Name </th>
          <th> Username </th>
          <th> Email </th>
          <th> Phone Number </th>
          {/* <th> Hiring Date </th> */}
          {/* This can come from the 'registered' return and calculate time since then */}
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}
