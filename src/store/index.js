import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { loadState, saveState } from '../common/localStorage';

const gameState = loadState()

const store = createStore(
    rootReducer,
    gameState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

store.subscribe(()=>{
        saveState(store.getState().toJS())
    })

export default store
