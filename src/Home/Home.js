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
    dogNames: [],
    employeeNames: []
  }

  getDogs = () => {
    dogData.getDogs()
      .then((dogs) => {
        this.setState({dogs:dogs})
        const dogNames = dogs.map((dog) => {
          return <option value={dog.id}>{dog.name}</option>
        })
        this.setState({dogNames:dogNames})
      })
      .catch()
  }

  getEmployees = () => {
    employeeData.getEmployees()
      .then((employees) => {
        this.setState({employees:employees})
        const employeeNames = employees.map((employee) => {
          return <option value={employee.id}>{employee.name}</option>
        })
        this.setState({employeeNames:employeeNames})
      })
      .catch()
  }

  getWalks = () => {
    walksData.getWalks()
      .then((walks) => this.setState({walks:walks}))
      .catch()
  };

  deleteWalk = (walkId) => {
    walksData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('messed up'));
  };

  addWalk = () => {
    walksData.addWalk()
      .then(() => this.getWalks())
      .catch();
  };

  deleteDog = (e) => {
    const dogToDelete = e.target.id;
    deleteDog.deleteDog(dogToDelete);
  };

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
      <h2 className="text-center">Hello to my Dog friends</h2>
      <CannineCorral dogs={printDoggies} deleteDog={deleteDog}/>
      <h2 className="text-center">Hello to my Human friends</h2>
      <EmployeesCorral employees={employeePeople}/>
      <h2 className="text-center">Scheduled Walks</h2>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Add a New Walk
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a New Walk</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Dog Names</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                {this.state.dogNames}
              </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Employee Names</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                {this.state.employeeNames}
              </select>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <Walks walks={walks} deleteWalk={this.deleteWalk}/>
      </div>
    )
  }
}

export default Home;