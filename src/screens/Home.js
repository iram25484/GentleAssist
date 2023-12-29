import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'




export default function Home() {

const [search,setSearch]=useState('');

const [doctorCat,setDoctorCat]=useState([]);
const [doctorItem,setDoctorItem]=useState([]);

const loadData= async ()=>{
  let response=await fetch ("http://localhost:5000/api/doctorData",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    }
  });
  response=await response.json();

  setDoctorItem(response[0]);
  setDoctorCat(response[1]);


//console.log(response[0],response[1])
}
useEffect(()=>{
  loadData()
},[])


 return(
  <div>
<div><Navbar/></div>
{/* <div><Carousel/></div> */}  
{/* copy paste carousal's code bcz it is not being used again */}

<div>  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>

{/* adding search bar . notice th div ki id  is taken from caption carousel  */}

<div className="carousel-caption"   style={{zIndex:"10", display:"inline"}}>
<div className="d-flex justify-content-center" style={{display:"flex"}} >
    <input className="form-control mr-sm-2" type="search" style={{minHeight:"47px"}} placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/> 


{/* we have removed the button and bcz search fucntionality is direclty available inside the input , js set the value and onchange and bring an && inside mapping of filter item.name.toLowerCase().includes(search.toLocaleLowerCase() */}
     {/* <button className="btn btn-outline-success my-2 my-sm-0"  style={{marginLeft:"10px" ,backgroundColor:"#000000" , }} type="submit">Search</button>  */}
     {/* <button className="btn btn-outline-success my-2 my-sm-0"  style={{marginLeft:"10px" ,backgroundColor:"#59CCFF" ,color:"white" }} type="submit">Search</button>  */}

  </div>
</div>

    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/?online,woman" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?health,woman,medicines" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?medicines" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>





<div className='container'>
  {
    doctorCat!==[]
    ? doctorCat.map((data)=>{
      return( <div className='row mb-3'>
   <div key={data._id} className="fs-3 m-3">
    {data.CategoryName}
    </div>
    <hr/>
    {doctorItem!==[]
    ?
     doctorItem.filter((item)=>(item.Category===data.CategoryName)&&((item.name.toLowerCase().includes(search.toLocaleLowerCase()))||(item.description.toLowerCase().includes(search.toLocaleLowerCase()))))
     .map(filterItems=>{
      return (
        <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
         
          <Card doctorItem={filterItems} options={filterItems.options[0]} ></Card>
        </div>
      
     )
    }
    ):<div>no data found</div>}
    </div>
      )
    })
    : ""
  }
 
</div>
<div><Footer/></div>
  </div>
 )
}