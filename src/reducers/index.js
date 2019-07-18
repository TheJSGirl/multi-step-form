import {PREV_STEP, NEXT_STEP, NEXT_STEP1} from '../actions/types';

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
            console.log(action)
            return {
                ...state,
                root: {step: state.root.step - action.step },
              };
        
        case NEXT_STEP: 
        return {
            ...state,
            root: {step: action.step + state.root.step}
        }
          default :
        return state
    }
}