import React, { Component } from "react";
import { Link } from "react-router-dom";
class Clients extends Component {
  render() {
    const clients = [
      {
        id: "12345",
        firstName: "bijay",
        lastName: "budhathoki",
        email: "bijay@gmail.com",
        phone: "1234567890",
        balance: "30"
      },
      {
        id: "1234567",
        firstName: "kumar",
        lastName: "nepali",
        email: "kumar@gmail.com",
        phone: "1234567889",
        balance: "70"
      }
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-8">
              <h2>
                <i className="fas fa-users" />
                Clients
              </h2>
            </div>
            <div className="col-md-4">total:</div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td> ${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loding..</h1>;
    }
  }
}
export default Clients;
