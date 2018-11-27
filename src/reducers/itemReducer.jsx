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
    console.log("item reducer called!");
    console.log(action);
    console.log(state);
    switch(action.type)
    {
        case 'ADD_ITEM' : 
            console.log("ADD_ITEM called in reducer");
            console.log(action.item);
            console.log(state);
            console.log(state.items);
            console.log(action.item.data);
            console.log({items:[...state.items,...action.item.data]});
            return ({items:[...state.items,...action.item.data]});
        
        case 'EDIT_ITEM' : 
            console.log("EDIT_ITEM called in reducer");
            return ({ items: state.items.map(item=>{
                
                if(item.id===action.id){
                    console.log(...action.updates);
                    console.log(action);
                    item.first_name=action.updates[0].first_name;
                    item.last_name=action.updates[0].last_name;
                    item.avatar=action.updates[0].avatar;
                    return item;
                    //return action.updates;
                    //above line is single line replacement for line 36-39
                    //but not working
                }
                else{
                    console.log(item);
                    return item;
                }
            })});

        case 'DELETE_ITEM' : 
            console.log("DELETE_ITEM called in reducer");
            return state.filter(id=>id!==action.id);

        case 'API_FETCH_REQUEST' : 
            console.log("API_FETCH_REQUEST called in reducer");
            return { ...state, isLoading:true, error: null };
        
        case 'API_FETCH_SUCCESS': 
            console.log("API_FETCH_SUCCESS called in reducer");
            //console.log(action);
            //console.log(action.result);
            console.log(action.result.data);
            console.log(state);
            console.log({ ...state,isLoading: false,items:[...action.result.data] });
            return { ...state,isLoading: false,items:[...action.result.data] };
        
        case 'API_FETCH_FAILURE': 
            console.log("API_FETCH_FAILURE called in reducer");
            return { ...state, isLoading: false, error: action.result.error };
        
        default : 
            console.log("default case called in reducer");
            return state;
    }
};