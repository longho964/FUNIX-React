import React, { Component } from "react";
import { Media } from "reactstrap";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";
class Liststaff extends Component {
  constructor(props) {
    super(props);
    this.state = { STAFFS, choosenStaff: null };
  }
  render() {
    console.log("this.state.STAFFS", this.state.STAFFS);

    const staffcompany = this.state.STAFFS.map((item) => {
      return (
        <div key={item.id} className="staff-list">
          <Media tag="li" onClick={() => this.showInfo(item)}>
            {" "}
            <Link exact to={`/nhanvien/${item.id} `}>
              <Media body className="ml-5">
                <img className="staff-list-image" src={item.image}></img>
                <Media heading>{item.name}</Media>
              </Media>{" "}
            </Link>
          </Media>
        </div>
      );
    });
    return (
      <div>
        <p>Tài sản quý giá nhất của doanh nghiệp chính là:</p>
        <h1 style={{ "text-align": "  center" }}>Nhân viên</h1>
        <div className="row-stafflist">{staffcompany}</div>;
      </div>
    );
  }
}

export default Liststaff;
