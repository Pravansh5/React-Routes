import {useReducer,useEffect} from 'react';
 function reducer(state,action){
    switch(action.type){
        case "fetchStarted":
        return {...state,loading:true}
        case "fetchSuccess":
        return {...state,loading:false,data:action.payload};
        case "fetchFailed":
        return {...state,loading:false,error:"failed to fetch!!"}
        default:
            throw new Error("failed to fetch");
    }
}
function FetchData(){
    const [state,dispatch]=useReducer(reducer,{loading:false,data:[],error:null});
    const url="https://fakestoreapi.com/products";
    useEffect(()=>{
        // dispatch({type:"fetchData",url:url}) ;
        dispatch({type:"fetchStarted"});
        async function fetchData(){
            try {
                let res=await fetch(url);
                let data=await res.json();
                dispatch({type:"fetchSuccess",payload:data});
            } catch (error) {
                dispatch({type:"fetchFailed"});
            };

        };
        fetchData()
    },[])

    return <>
        {/* {console.log(state.data)} */}
    <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>

    {
        
        state.data?.
        map((ele,ind)=>(
            <div style={{border:"4px solid green" }} key={ind}>
                <img src={ele.image} width="100px" alt="" />
                <p>Title : {ele.title}</p>
                <p>Price : {ele.price}</p>
                


            </div>
        ))
    }
    </div>
    </>

}

export default FetchData;