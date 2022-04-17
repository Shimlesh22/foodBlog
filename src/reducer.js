const reducer = (state={},action)=>{
    switch(action.type){
        case 'GET_MALAYSIAN_FOOD_LIST':
                 return {...state, isLoading:true}
        case 'GET_OTHER_FOOD_LIST':
                 return {...state, isLoading:true}
        case 'MALAYSIAN_FOOD_LIST_RECEIVED':
        case  'OTHER_FOOD_LIST_RECEIVED' :
              return {...state, food: action.food.articles, isLoading:false}
        default:
            return state;
    }
};

export default reducer;

