import {DISHES} from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: false,
    errMess: null,
    dishes: [],
}, action) =>{
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            console.log('ADD_DISHES:', action.payload)
            return {...state, isLoading:false, errMess:null, dishes: action.payload}
        
        case ActionTypes.DISHES_LOADING:
            console.log('DISHES_LOADING:', action.payload)
            return {...state, isLoading:true, errMess:null, dishes: []}
        
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMess:action.payload, dishes: []}

        default:
            return state;
    }
}