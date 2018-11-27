export const deleteItem = (id) =>({
    type:'DELETE_ITEM',
    id
});


export const fetchAPIError = () =>({
    type:'API_FETCH_FAILURE',
});


export const startDeleteItem = (id) =>{
    return (dispatch,getState)=>{
        return dispatch(deleteItem(id));
    };
};



export const startFetchAPIFailure=()=>{
    return (dispatch,getState)=>{
        return dispatch(fetchAPIError());
    }
}


//action with action creator to run saga (2nd generator fn)
export const fetchItem = () =>{
    return { type:'FETCHED_ITEM'}
}

export const startFetchAPISuccess=(result)=>{
        return { type:'API_FETCH_SUCCESS',result };   
}

export const startFetchAPIRequest=()=>{
        return {type:'API_FETCH_REQUEST'};
};

export const addItem = (item) =>{
    return {type:'ADD_ITEM',item};
};

export const editItem=(id,updates)=>{
    return {type:'EDIT_ITEM',id,updates}
}
