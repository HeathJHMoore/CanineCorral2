import React from 'react';

import Walk from '../Walk/Walk';

class Walks extends React.Component {
  render() {
    const walkComponents = this.props.walks.map((walk) => (
      <Walk key={walk.id} walk={walk} deleteWalk={this.props.deleteWalk}/>
    ))
    return (
      <div class="row"> 
        {walkComponents}
      </div>
    )
  }
}

export default Walks;