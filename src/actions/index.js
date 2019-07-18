import {PREV_STEP, NEXT_STEP, NEXT_STEP1} from './types';

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

export function increment() {
    return {
        type: NEXT_STEP1,
        step: 2
    }
}