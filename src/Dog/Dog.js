import React from 'react';

class Dog extends React.Component {

  deleteDog = () => {
    console.error('hello')
    const deleteFunction = this.props.deleteStuff;
    deleteFunction();
  };

  render() {
    const {dog} = this.props;
    return (
      <div className="Dog col-6 col-md-4 col-lg-3 mb-2">
        <div className="card">
          <img className="card-img-top" src={dog.imageUrl} alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.disposition}</p>
            <button id={dog.id} className="btn btn-danger" onClick={this.deleteDog}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dog;