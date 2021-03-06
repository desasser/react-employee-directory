import React, { Component } from 'react'
import EmployeeRow from './components/EmployeeRow';
import Table from './components/Table';
import Search from './components/Search';
import Header from './components/Header';
import API from './utils/API'
import ResetButton from './components/ResetButton';

export class Employee extends Component {
  state = {
    users: [],
    sortedUsers: [],
    search: "",
    asc: null
  }

  componentDidMount() {
    this.seedEmployees();
  }

  seedEmployees = () => {
    API.randomEmployees().then(response => {
      console.log(response.data.results);
      this.setState({
        users: response.data.results,
        sortedUsers: [...response.data.results]
      })
    })
  }

  sortEmployeesFirstName = () => {
    if (this.state.asc === true) {
      const beSorted = this.state.sortedUsers.sort(function (a,b) {
        const valueA = a.name.first.toUpperCase();
        const valueB = b.name.first.toUpperCase();
        if (valueA < valueB) {
          return 1
        }
        if (valueA > valueB) {
          return -1
        }
          return 0
      })
      this.setState({
        sortedUsers:beSorted,
        asc: false
      })
    } else {
      console.log('users', this.state.users);
      const beSorted = this.state.sortedUsers.sort(function (a,b) {
        const valueA = a.name.first.toUpperCase();
        const valueB = b.name.first.toUpperCase();
        if (valueA < valueB) {
          return -1
        }
        if (valueA > valueB) {
          return 1
        }
          return 0
      })

      this.setState({
        sortedUsers:beSorted,
        asc: true
      })
      // console.log('sorted', this.state.sortedUsers);
    }
  }

  filterEmployeesByFirstName = (query) => {
    const filteredEmployees = this.state.users.filter(employee => employee.name.first.toLowerCase().includes(query.toLowerCase()));
    this.setState({sortedUsers: filteredEmployees});
  }

  clearFilters = () => {
    // console.log('current users array', this.state.users);
    // console.log('sortedusers', this.state.sortedUsers);
    this.setState({sortedUsers:[...this.state.users]})
  }
  
  handleInputChange = e => {
    const {name,value} = e.target;
    this.filterEmployeesByFirstName(value);
    this.setState({[name]:value})
  }

  render() {
    return (
      <div>
        <Header />
        <Search name="search" onChange={this.handleInputChange} value={this.state.search}/>
        <Table sortFirstName={this.sortEmployeesFirstName}>
          {/* map over each employee to create table rows*/}
          {this.state.sortedUsers.map(employee => <EmployeeRow key={employee.login.uuid} details={employee} />)}
        </Table>
        <ResetButton onClick={this.clearFilters}/>
      </div>
    )
  }
}

export default Employee
