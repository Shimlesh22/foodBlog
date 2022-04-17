import { put , takeLatest, all } from 'redux-saga/effects';

// worker saga 
function* fetchMalaysianFoodList(){
    const records = yield fetch('https://api.edamam.com/search?q=chicken&app_id=e2e08c25&app_key=263e7823ea5c753a046a09cc80d1eaca&from=0&to=3&calories=591-722&health=alcohol-free')
    .then(response => response.json());
    yield put({type:"MALAYSIAN_FOOD_LIST_RECEIVED", food : records})
}



// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_MALAYSIAN_FOOD_LIST', fetchMalaysianFoodList)
   
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}


