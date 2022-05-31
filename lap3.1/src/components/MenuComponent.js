import { Media } from "reactstrap";
import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [
        {
          id: 0,
          name: "pizza",
          image: "acssets/image/uthappizza.png",
          category: "mains",
          label: "hot",
          price: "4.99",
        },
        {
          id: 1,
          name: "pizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "hot",
          price: "4.99",
        },
        {
          id: 2,
          name: "pizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "hot",
          price: "4.99",
        },
        {
          id: 3,
          name: "pizza",
          image: "assets/images/uthappizza.png",
          category: "mains",
          label: "hot",
          price: "4.99",
        },
      ],
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
            </Media>
          </Media>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <Media Lish>{menu}</Media>
        </div>
      </div>
    );
  }
}
export default Menu;
