import * as actions from '../common/actionType';

export const changeDirection = (direction) => {
    return {
        type:actions.CHANGE_DIRECTION,
        payload:direction
    }
}

export const resetDirection = () => {
    return {
        type:actions.RESET_DIRECTION
    }
}