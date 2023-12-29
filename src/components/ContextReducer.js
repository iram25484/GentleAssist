import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext(); 
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
        return[...state, {id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img,options:action.options}]
    
     case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;   

        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.options)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty }
                }
                return arr
            })
            return arr       
        default:
            console.log("error in reducer");

}
}

export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);