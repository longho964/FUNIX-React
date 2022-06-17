import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

function RenderCard(items) {
  return (
    <Card>
      <CardImg src={items.image} alt={items.name} />
      <CardBody>
        <CardTitle>{items.name}</CardTitle>
        {items.designation ? (
          <CardSubtitle>{items.designation}</CardSubtitle>
        ) : null}
        <CardText>{items.description}</CardText>
      </CardBody>
    </Card>
  );
}
export default Home;
