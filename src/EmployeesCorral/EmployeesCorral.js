import React from 'react';
import Employee from '../Employee/Employee';

class EmployeesCorral extends React.Component {
  render() {
    const {employees} = this.props;
    const makeEmployees = employees.map((employee) => (
      <Employee key={employee.id} employee={employee} />
    ))
    return (
      <div class="row">
        {makeEmployees}
      </div>
    )
  }
}

export default EmployeesCorral;