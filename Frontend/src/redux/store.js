import { createStore, combineReducers } from 'redux';
import parameterReducer from './reducer'; // 导入您的 reducer

const rootReducer = combineReducers({
    result: parameterReducer
  });

const store = createStore(rootReducer); // 创建 Redux store，并将 reducer 添加到 store 中

export default store;