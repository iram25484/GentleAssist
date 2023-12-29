
import React,{useState} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function Card(props) {
let dispatch=useDispatchCart();
let options =props.options;
let data=useCart();
let priceOptions=Object.keys(options);

const[qty,setQty]=useState(1)
const[size,setSize]=useState("")


const myFunction = async ()=>{
  
  const x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML =`On ${x}`;
};

const handleBook=async()=>{
  
  let food=[]
  for(const item of data){
    if(item.id===props.doctorItem._id){
      food=item;
      break;
    }
  }
  if ( food!==[] ){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:props.doctorItem._id,qty:qty})
        return
      }
  
      else if(food.size!==size){
        await dispatch({type:"ADD",id:props.doctorItem._id,name:props.doctorItem.name,qty:qty,size:size})
     return
      }
      return
  }

await dispatch({type:"ADD",id:props.doctorItem._id, name:props.doctorItem.name,qty:qty,size:size})
myFunction();
console.log(data);
}

const appointm=options[size];


  return (
    <div>
       <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img src={props.doctorItem.img}  className="card-img-top .bg-image " alt="..." style={{height:"120px",objectFit:"fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.doctorItem.name}</h5>
                 

                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-primary text-white' onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (

                                    // here u will store timings from which appointment will b booked

                                    <option key={i + 1} value={i+1}>{i + 1}</option>
                                )
                            })}


                        </select>
                        {/* <h8>select date</h8> */}
                      
                      <select className='p-1 mb-2 bg-info text-white' onChange={(e)=>setSize(e.target.value)} >
                        {/* <option value="morning">Morning</option>
                        <option value="evening">Evening</option> */}
                        <option value="" disabled selected>Select Timings</option> {/* Placeholder option */}
                        {priceOptions.map((data)=>{
                            return <option key={data} value={data}>{data}</option>
                        })}
                   </select>

                        <input type="date" className='mb-2 bg-primary text-white' id="myDate"/>
                      
                        <div id="demo"></div>
 
                      
 

  

                       


                    </div>
                    <div className='d-line h-100 fs-5'>
                      appointment b/w {appointm}
                    </div>
                </div>
                <hr></hr>
                <button className={`btn btn-primary justify-center`}  onClick={handleBook}>Book</button>
            </div>
            </div>
    </div>
  )
}


