import {PREV_STEP, NEXT_STEP} from '../actions/types';

const iniitialState = {
    root: {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }
}
export default (state=iniitialState, action) => {    
    switch(action.type) {
        case PREV_STEP:
            return {
                ...state,
                root: {step:action.step - 1},
              };
        
        case NEXT_STEP: 
        return {
            ...state,
            root: {step: action.step + 1}
        }
          default :
        return state
    }
}