import React, { Component } from 'react'

export default class MainContent extends Component {
    state = {appTitle: "Employees"};

  render() {
    return (
      <div>
      <h4 className=''>{this.state.appTitle}</h4>
      </div>
    )
  }
}

