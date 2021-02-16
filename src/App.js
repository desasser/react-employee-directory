import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
// fetch friends from API

// ajax call to https://randomuser.me/
// store data
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
