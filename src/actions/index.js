import {PREV_STEP, NEXT_STEP} from './types';

export function prev() {
    return {
        type: PREV_STEP,
        step: 1
    }
}

export function next() {
    return {
        type: NEXT_STEP,
        step: 1
    }
}