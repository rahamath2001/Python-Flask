const reducer=(state,action)=>{
    console.log(action);
    if(action.type==='deposit'){
        return state+action.payload
    }
    else if(action.type==='withdraw'){
        return state-action.payload
    }
    else{
        return state=0;
    }
}

export default reducer;