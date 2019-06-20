import React from 'react';

import Dog from '../Dog/Dog';

class CannineCorral extends React.Component {
  render() {
    const {dogs} = this.props;
    const makeDogs = dogs.map((dog) => (
      <Dog key={dog.id} dog={dog} />
    ))
    return (
      <div class="CannineCorral row">
        { makeDogs }
      </div>
    )
  }
}

export default CannineCorral;