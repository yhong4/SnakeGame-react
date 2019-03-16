import * as actions from '../../common/actionType';

const initialDirection = 'direction_up';

const direction = (state = initialDirection, action) => {
    switch(action.type) {
        case actions.CHANGE_DIRECTION:
            return action.payload
        case actions.RESET_DIRECTION:
            return initialDirection
        default:
            return state
    }
}

export default direction