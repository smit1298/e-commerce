import React, { Component } from 'react'

export default class MainContent extends Component {
    state = {pageTitle: "Customers", customersCount: 5};

  render() {
    return (
      <div>
      <h4 className='border-bottom m-1 p-1'>{this.state.pageTitle}
      <span>{this.state</span>
      </h4>
      </div>
    )
  }
}

