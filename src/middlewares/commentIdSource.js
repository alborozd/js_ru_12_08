
import {ADD_COMMENT} from "../constants";

export default store => next => action => {
    console.log('comment middleware', action);
    
    if (action.type === ADD_COMMENT) {
        let maxId = Math.max(...store.getState().comments.toJS().map(item => item.id));
        next({...action, commentId: ++maxId});
    } else {
        next(action);
    }
    
}