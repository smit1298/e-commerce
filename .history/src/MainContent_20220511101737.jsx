import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scot",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1019/60"
      },
      {
        id: 2,
        name: "Jones",
        phone: "789-012",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1010/60"
      },
      {
        id: 3,
        name: "Alen",
        phone: "345-678",
        address: { city: "New London" },
        photo: "https://picsum.photos/id/1011/60"
      },
      {
        id: 4,
        name: "John",
        phone: null,
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1012/60"
      },
      {
        id: 5,
        name: "James",
        phone: null,
        address: { city: "New Berlin" },
        photo: "https://picsum.photos/id/1013/60"
      }
    ]
  };
customerNameStyle = (custName) =>{
if(custName.startsWith("S"))return"green-highlight border-left";
else if(custName.startsWith("J"))return{backgroundColor:"red"};
else return{};
}
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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
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

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else return <div className="bg-warning p-2 text-center">No Phone</div>;
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="customer" />
          </td>
          <td style={this.customerNameStyle(cust.name)}>{cust.name}</td>
          <td> {this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
