
import {ADD_COMMENT} from "../constants";

export default store => next => action => {
    console.log('comment middleware', action);
  //Мидлвары должны быть максимально универсальными. Тебе и в будущем может понадобиться логика генерации id, не привязывайся к типу екшина
    if (action.type === ADD_COMMENT) {
        //Лучше просто random или guid, тут у тебя не будет гарантий уникальности
        let maxId = Math.max(...store.getState().comments.toJS().map(item => item.id));
        next({...action, commentId: ++maxId});
    } else {
        next(action);
    }
    
}
