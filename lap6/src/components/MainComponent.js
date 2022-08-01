import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leader";
import { Loading } from "./LoadingComponent";
import {
  addComment,
  fetchDishes,
  fetchPromos,
  fetchComments,
} from "../redux/ActionCreator";
import { connect } from "react-redux";
// import {actions} from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId)),
  fetchDishes: () => {dispatch(fetchDishes())},
  // resetFeedbachForm: () => {
  //   dispatch(actions.reset("feedback"));
  // },
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    console.log('props:',this.props)
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.id)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      console.log("match:", match);
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route exact path="/menu">
            <Menu dishes={this.state.dishes} />
          </Route>

          <Route path="/menu/:dishId" component={DishWithId} />

          <Route exact path="/contactus">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
