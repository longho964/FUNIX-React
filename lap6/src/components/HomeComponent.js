import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function RenderCard(items,isLoading,errMess ) {
  // if (isLoading){
  //   return(
  //     <Loading />
  //   )
  // }
  // else 
  if(errMess){
    return(
      <h4>{errMess}</h4>
    )
  }else
    return (
      <Card>
        <CardImg src={baseUrl + items.image} alt={items.name} />
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

function Home(props) {
  console.log("this is home page");

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            items={props.dish}
            isLoading={props.disesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errMess={props.promosErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}


export default Home;
