import React from 'react';

class Dog extends React.Component {
  render() {
    const {dog} = this.props;
    return (
      <div className="Dog col-6 col-md-4 col-lg-3 mb-2">
        <div className="card">
          <img className="card-img-top" src={dog.imageUrl} alt="Card cap"/>
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">{dog.disposition}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dog;