
import {useCart,useDispatchCart} from '../components/ContextReducer';


export default function Cart(){
    let data=useCart();
    let dispatch =useDispatchCart();
    if(data.length===0){
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3 text-white '>The Cart is empty!</div>
            </div>
        )
    }

   
    return (
        <div>
           { console.log(data)}
            <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md text-white'>
            <table className='table table-hover text-white'>
                <thead className=' text-primary fs-4 '>
                    <tr>
                        <th scope='col'>Sno.</th>
                        <th scope='col'>Concern</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Timing</th>
                        <th scope='col'>Date</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food,index)=>(
                       <tr>
                        <th scope="row"  className="text-white fs-5 ">{index+1}</th>
                      
                        <td className="text-white fs-5" >{food.name}</td> 
                        <td className="text-white fs-5" >{food.qty}</td>
                        <td className="text-white fs-5" >{food.options}</td>
                        <td className="text-white fs-5" >{food.price}</td>
                 <td><button type="button" className="btn p-0"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEq3DyAAF3bQnHQHF74b9Racl1hP5Q3llBA&usqp=CAU"  height={"30px"} width={"30px"} alt="delete" onClick={()=>{dispatch({type:"REMOVE",index:index})}}/></button></td>       
                       </tr> 
                    ))}
                </tbody>
            </table>
<div> <button className="btn bg-primary mt-5">proceed</button> </div>
        </div>

        </div>
    )

}


