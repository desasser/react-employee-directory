import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
        <tr>
          <th> Picture </th>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Email </th>
          <th> Username </th>
          <th> Phone Number </th>
          <th> Hiring Date </th> 
          {/* This can come from the 'registered' return and calculate time since then */}
        </tr>
      </div>
    )
  }
}
