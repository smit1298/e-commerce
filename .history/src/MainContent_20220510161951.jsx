import React, { Component } from 'react'

export default class MainContent extends Component {
    state = {appTitgle: "Customers"};

  render() {
    return (
      <div>
      <h4>{this.stat}</h4>
      </div>
    )
  }
}

