import React from 'react'
import "./style.css";

export default function index() {
  return (
    <div>
      <tr>
        <th> Picture </th>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Email </th>
        <th> Username </th>
        <th> Phone Number </th>
        {/* <th> Hiring Date </th> */}
        {/* This can come from the 'registered' return and calculate time since then */}
      </tr>
    </div>
  )
}
