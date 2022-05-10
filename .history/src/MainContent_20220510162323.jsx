import React, { Component } from 'react'

export default class MainContent extends Component {
    state = {page: "Customers"};

  render() {
    return (
      <div>
      <h4 className='border-bottom m-1 p-1'>{this.state.page}</h4>
      </div>
    )
  }
}

