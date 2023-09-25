import React from 'react'
import "./App.css";
const Asection = () => {
  return (
    <div className=' align items-center' >
      <center>
      <h2>Explore Your Path </h2>
      <h5>Find your path</h5>
      <center>
      <div className="row ">
  <div className="col-sm-3 width:18rem">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-primary text-center">Empower Growth</h5>
        <h6 className='text-primary'>Boost your team</h6>
        <p className="card-text">Discover top talent for your organization<br/>
        & accelerate your bussiness growth. find<br/>
         the perfect match for your job opening<br/>
         with our AI driven candidates screening</p>
        <a href="/Foremployer" className="btn btn-primary">For employer</a>
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-primary">Unlock Opportunities </h5>
        <h6 className='text-primary'>Maximize earnings</h6>
        <p className="card-text">Take your recruitment career to new <br/>
        heights. Gain access to a pool of verified<br/>
        job openings and muliply your earnings<br/>
        with our attractive commission structure</p>
        <a href="/Forrecruiter" className="btn btn-primary">For Recruiters</a>
      </div>
    </div>
  </div>
  
<div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-primary">Your Dream Job</h5>
        <h6 className='text-primary'>Within Reach</h6>
        <p className="card-text">Find your dream job with ease. access<br/>
        validated job Opportunities and receive <br/>
        personalized job alerts that match your <br/>
        skills and preferences.</p>
        <a href="/Forjobseeker" className="btn btn-primary">For Jobseeker</a>
      </div>
    </div>
  </div>

        
    </div> 
    </center>
</center>
    </div>
  )
}
export default Asection;
