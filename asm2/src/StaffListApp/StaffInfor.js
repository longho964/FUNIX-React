import { STAFFS } from "./staffs";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Link } from "react-router-dom";

class StaffInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS,
      choosenStaff: null,
    };
  }

  showInfo(item) {
    this.setState({ choosenStaff: item });
  }

  render() {
    console.log("da vao day roi");
    return (
      <div className="container">
        <h1 className="application"> NHÂN VIÊN </h1>

        <div className="infor">
          <h1> Thông tin chi tiết nhân viên</h1>{" "}
        </div>

        <div className="infor-body">
          {" "}
          {this.state.choosenStaff !== null && (
            <div key={this.state.choosenStaff.id} className="containerinfor">
              <h5> Họ và tên: {this.state.choosenStaff.name}</h5>
              <p> Ngày sinh : {this.state.choosenStaff.doB}</p>
              <p> Ngày vào công ty:{this.state.choosenStaff.startDate}</p>
              <p> Phòng ban: {this.state.choosenStaff.department.name}</p>
              <p>
                {" "}
                Số ngày nghỉ còn lại: {this.state.choosenStaff.annualLeave}
              </p>
              <p> số ngày làm thêm: {this.state.choosenStaff.overTime}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StaffInfor;
