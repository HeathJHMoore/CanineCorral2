import React from 'react';

// import myDogs from '../App/dogs';
// import myEmployees from '../App/employees';
import CannineCorral from '../CannineCorral/CannineCorral';
import EmployeesCorral from '../EmployeesCorral/EmployeesCorral';
import dogData from '../Helpers/data/getDogs';
import employeeData from '../Helpers/data/getEmployees';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  getDogs = () => {
    dogData.getDogs()
      .then((dogs) => {this.setState({dogs:dogs})})
      .catch()
  }

  getEmployees = () => {
    employeeData.getEmployees()
      .then((employees) => {this.setState({employees:employees})})
      .catch()
  }


  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    // this.setState({dogs: myDogs, employees: myEmployees})
  }
  render() {
    const printDoggies = this.state.dogs;
    const employeePeople = this.state.employees;
    return (
      <div>
      <h2 class="text-center">Hello to my Dog friends</h2>
      <CannineCorral dogs={printDoggies}/>
      {console.error(`${printDoggies}`)}
      <h2 class="text-center">Hello to my Human friends</h2>
      <EmployeesCorral employees={employeePeople}/>
      </div>
    )
  }
}

export default Home;