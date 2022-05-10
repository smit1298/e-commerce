import React, { Component } from "react";

export default class MainContent extends Component {
  state = { 
      pageTitle: "Customers",
       customersCount: 5,
       customers: [
           {id: 1, name:"scot", phone: "123-456"}
           {id: 2, name:"scot", phone: "123-456"}
           {id: 1, name:"scot", phone: "123-456"}
           {id: 1, name:"scot", phone: "123-456"}
           {id: 1, name:"scot", phone: "123-456"}
       ]
     };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="m-2">{this.state.customersCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    );
  }

  //   Executes when the user clicks on refresh button
  onRefreshClick =() =>{
    this.setState({
        customersCount: 7
    });
  }
}
