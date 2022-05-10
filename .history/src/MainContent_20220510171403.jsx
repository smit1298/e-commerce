import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "scot", phone: "123-456", address:{ city: "New Delhi"} },
      { id: 2, name: "Jones", phone: "789-012", address:{ city: "New Jer"}  },
      { id: 3, name: "Alen", phone: "345-678" },
      { id: 4, name: "John", phone: "901-234" },
      { id: 5, name: "James", phone: "567-890" }
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
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //   Executes when the user clicks on refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7
    });
  };
}
