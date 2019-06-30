import React from 'react';

// import myDogs from '../App/dogs';
// import myEmployees from '../App/employees';
import CannineCorral from '../CannineCorral/CannineCorral';
import EmployeesCorral from '../EmployeesCorral/EmployeesCorral';
import dogData from '../Helpers/data/getDogs';
import employeeData from '../Helpers/data/getEmployees';
import walksData from '../Helpers/data/walksData';
import Walks from '../Walks/Walks';

import deleteDog from '../Helpers/data/deleteDogs';
import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
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

  getWalks = () => {
    walksData.getWalks()
      .then((walks) => this.setState({walks:walks}))
      .catch()
  }

  deleteWalk = (walkId) => {
    walksData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('messed up'))
  }


  deleteDog = (e) => {
    const dogToDelete = e.target.id;
    deleteDog.deleteDog(dogToDelete);
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
    // this.setState({dogs: myDogs, employees: myEmployees})
  }
  render() {
    const printDoggies = this.state.dogs;
    const employeePeople = this.state.employees;
    const {walks} = this.state;
    return (
      <div>
      <h2 class="text-center">Hello to my Dog friends</h2>
      <CannineCorral dogs={printDoggies} deleteDog={deleteDog}/>
      <h2 class="text-center">Hello to my Human friends</h2>
      <EmployeesCorral employees={employeePeople}/>
      <h2 className="text-center">Scheduled Walks</h2>
      <Walks walks={walks} deleteWalk={this.deleteWalk}/>
      </div>
    )
  }
}

export default Home;