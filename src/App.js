import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import EmployeeRow from './components/EmployeeRow';
import Table from './components/Table';
// fetch friends from API

// ajax call to https://randomuser.me/
// store data
// calculate hire date
// add hireDate key to each object
const employeeArr = data;

export class Employee extends Component {
  render() {
    return (
      <div>
        <Table>
          {/* map over each employee to create table rows*/}
          {employeeArr.map(employee => <EmployeeRow key={employee.id} details={employee} />)}
        </Table>
      </div>
    )
  }
}

export default Employee
