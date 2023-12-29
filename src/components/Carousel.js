

import React from 'react';

export default function Carousel() {
  return (
    <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>

{/* adding search bar . notice th div ki id  is taken from caption carousel  */}

<div className="carousel-caption"   style={{zIndex:"10", display:"inline"}}>
<form className="form-inline" style={{display:"flex"}} >
    <input className="form-control mr-sm-2" type="search" style={{minHeight:"47px"}} placeholder="Search" aria-label="Search"/> 

     {/* <button className="btn btn-outline-success my-2 my-sm-0"  style={{marginLeft:"10px" ,backgroundColor:"#000000" , }} type="submit">Search</button>  */}
     <button className="btn btn-outline-success my-2 my-sm-0"  style={{marginLeft:"10px" ,backgroundColor:"#59CCFF" ,color:"white" }} type="submit">Search</button> 

  </form>
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
  );
}
