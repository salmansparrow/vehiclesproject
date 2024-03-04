import { Button, Col, Container, Row } from "reactstrap";
import Image from "next/image";
import classes from "./services.module.css"
import servicesimage from "@/public/images/services.png"



function ServicesPage(){
    return (
        <>

        <div>
            <Container className= "mb-5">
 

 <Row className="flex-lg-row align-items-center py-5">

 <div className="col-10 col-sm-8 col-lg-6">
         <Image src={servicesimage} style={{ width: 'auto', height: 'auto' }} className={`${classes.servicesimg} d-block mx-lg-auto img-fluid`} alt="about pic"/>
       </div> 
       <div className="col-10 col-sm-8 col-lg-6 text-black">
       
       <h2 className={classes.accordinghead}>Our core services</h2>
  
       <div className="accordion" id="accordionExample">
  <div className={`${classes.rectangle} accordion-item`}>

      <h1 className="accordion-header" id="headingOne">
      <button className={`${classes.btn} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span className=" me-3" style={{fontSize:'33px', color:"#ED652B"}}>01</span> 
       <span className={`${classes.accordingheading} d-` }>Fleet Management</span>
            </button>
    </h1>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`${classes.para} accordion-body ms-lg-5 ms-lg-0` }>
      PVS provides commercial fleet management for a variety of businesses across the UK. Commercial fleet management allows you to purchase vehicles in whatever way best suits your business while still receiving industry leading service.
      </div>
    </div>
  </div>
  <div className={`${classes.rectangle} accordion-item`}>
    <h2 className="accordion-header" id="headingTwo">
      <button className={`${classes.btn} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span className="me-3" style={{fontSize:'33px', color:"#9EA6B2"}}> 02 </span>
      <span className={`${classes.accordingheading1} d-lg-inline d-block`}>Service & Maintenance</span>      
            </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className={`${classes.para} accordion-body ms-lg-5 ms-lg-0`}>
      PVS provides commercial fleet management for a variety of businesses across the UK. Commercial fleet management allows you to purchase vehicles in whatever way best suits your business while still receiving industry leading service.
      </div>
    </div>
  </div>
  <div className={`${classes.rectangle} accordion-item`}>
    <h2 className="accordion-header" id="headingThree">
      <button className={`${classes.btn} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <span className="me-3" style={{fontSize:'33px', color:"#9EA6B2"}}> 03 </span>
      <span className={classes.accordingheading}>      Vehicle Sourcing
 </span>
     
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className={`${classes.para} accordion-body ms-lg-5 ms-lg-0`}>
     PVS provides commercial fleet management for a variety of businesses across the UK. Commercial fleet management allows you to purchase vehicles in whatever way best suits your business while still receiving industry leading service.
      </div>
    </div>
  </div>
</div>
<div className="gap-2 d-md-flex justify-content-md-start">
           <button type="button" className=" btn btn-primary btn-lg px-4 me-md mt-2">About Us</button>
                   </div>
       </div>

       
     </Row>
   
 
 </Container>
 </div>
        </>
    );
}

export default ServicesPage