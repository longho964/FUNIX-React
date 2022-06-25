import React, { Component } from "react";
import { Media } from "reactstrap";
import { STAFFS } from "./staffs";
import "../App";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import dateFormat from "dateformat";
import { Switch } from "react-router";
import Header from "./header";
import Footer from "./footer";
import StaffInfor from "./StaffInfor";

class StaffList extends Component {
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
    console.log("this.state.STAFFS", this.state.STAFFS);
    const menu = this.state.STAFFS.map((item) => {
      return (
        <div key={item.id} className="liInfor">
          <Media tag="li" onClick={() => this.showInfo(item)}>
            {" "}
            <Link to="/staffInfor">
              <Media body className="ml-5">
                <img src={item.image}></img>
                <Media heading>{item.name}</Media>
              </Media>{" "}
            </Link>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <h1 className="application"> FUNIX REACT COMPANY</h1>
        <Header />

        <Routes>
          <Route exact path="/a" element={<StaffList />} />
          <Route exact path="/b" element={<StaffInfor />} />
          <Route exact path="/c" element={<StaffList />} />
        </Routes>

        <div>
          <Media list className="row">
            {menu}
          </Media>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StaffList;
