import React from 'react';

class Walk extends React.Component {

  deleteEvent = (e) => {
    const {walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id)
  }

  editEvent = (e) => {
    e.preventDefault();
    const {walk, editWalk} = this.props;
    console.error(walk);
    editWalk(walk);
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Employee col-6 col-md-4 col-lg-3 mb-2">
        <div className="card">
          <h1>{walk.id}</h1>
          <div className="card-body">
            <h3>Dog: {walk.dogName}</h3>
            <h3>Employee: {walk.employeeName}</h3>
            <h3>Time: {walk.date}</h3>
            <button className="btn btn-danger col-12" onClick={this.deleteEvent}>Delete Walk</button>
            <button className="btn btn-secondary col-12" data-toggle="modal" data-target="#exampleModal" onClick={this.editEvent}>Edit Walk</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Walk