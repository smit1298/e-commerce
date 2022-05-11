import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "scot", phone: "123-456", address: { city: "New Delhi" } },
      {
        id: 2,
        name: "Jones",
        phone: "789-012",
        address: { city: "New Jersey" }
      },
      {
        id: 3,
        name: "Alen",
        phone: "345-678",
        address: { city: "New London" }
      },
      { id: 4, name: "John", phone: null, address: { city: "New York" } },
      { id: 5, name: "James", phone: null, address: { city: "New Berlin" } }
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
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td> </td>
                  <td>{cust.address.city}</td>
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

  getPhoneToRender() {
    return
      cust.phone ? (
        cust.phone
      ) : (
        <div className="bg-warning p-2 text-center">No Phone</div>
      );
    
  }
}
