import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
// fetch friends from API

// ajax call to https://randomuser.me/
// store data
// calculate hire date
// add hireDate key to each object
const employeeArr = data;

function App() {
  return (
    <div>
      <Table>
        {/* map over each employee to create table rows*/}
        {employeeArr.map(employee => <Employee key={employee.id} details={employee} />)}
      </Table>
    </div>
  );
}

export default App;
