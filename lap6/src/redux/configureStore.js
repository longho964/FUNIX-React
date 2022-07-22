import {CreateStore, combineReducers} from 'redux';
import {Dishes} from '.dishes.js';
import {Leaders} from '.leaders.js';
import {Comments} from '.comments.js';
import {Promotions} from '.promotion.js';

export const ConfigureStore = ()=>{
    const store = CreateStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );
    return store;
}