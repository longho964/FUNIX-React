import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  componentDidMount() {
    console.log("Dishdetail Component componentDidMount");
  }

  componentDidUpdate() {
    console.log("Dishdetail Component componentDidUpdate");
  }

  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comnents</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>{comment.author}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    if (this.props.dish != null)
      return (
        <div class="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}

export default DishDetail;
