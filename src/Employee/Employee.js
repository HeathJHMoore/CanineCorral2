import React from 'react';

class Employee extends React.Component {
  render() {
    const {employee} = this.props;
    return (
      <div className="Employee col-6 col-md-4 col-lg-3 mb-2">
        <div className="card">
          <img className="card-img-top" src={employee.imageUrl} alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">{employee.disposition}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Employee;