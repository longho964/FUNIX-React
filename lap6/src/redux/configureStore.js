import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Dishes} from './dishes.js';
import {Leaders} from './leaders.js';
import {Comments} from './comments.js';
import {Promotions} from './promotions';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { dishesLoading } from './ActionCreator.js';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    const rootReducer = combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders
    })

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    // store.dispatch(dishesLoading())

    return store;
}