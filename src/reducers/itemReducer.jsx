const initialState={
    isLoading:true,
    error:undefined,
    items:{
            "data":[{
           }]
    },
    fname:'',
    lname:undefined,
    iurl:undefined,
    id:undefined
};

export default (state=initialState,action)=>{
    switch(action.type)
    {
        case 'ADD_ITEM' : 
            return ({items:[...state.items,...action.item.data]});
        
        case 'EDIT_ITEM' : 
            return ({ items: state.items.map(item=>{
                
                if(item.id===action.id){
                    item.first_name=action.updates[0].first_name;
                    item.last_name=action.updates[0].last_name;
                    item.avatar=action.updates[0].avatar;
                    return item;
                    //return action.updates;
                    //above line is single line replacement for line 36-39
                    //but not working
                }
                else{
                    return item;
                }
            })});

        case 'DELETE_ITEM' : 
            return state.filter(id=>id!==action.id);

        case 'API_FETCH_REQUEST' : 
            return { ...state, isLoading:true, error: null };
        
        case 'API_FETCH_SUCCESS': 
            return { ...state,isLoading: false,items:[...action.result.data] };
        
        case 'API_FETCH_FAILURE': 
            return { ...state, isLoading: false, error: action.result.error };
        
        default : 
            return state;
    }
};
