import { Button, Col, Container, Row } from "reactstrap";
// import { AboutPvs } from "./aboutpvs";
import classes from "./about.module.css"
import Link from "next/link";
import aboutpic1 from "@/public/images/aboutpic1.png";
import aboutpic2 from "@/public/images/aboutpic2.png";
import Image from "next/image";

function AboutUs(){

    return (
        <>
        {/* <div className=`${classes.about} py-3 mb-lg-2`> */}

        

<div className={`${classes.bg} mb-2`}>
    
<Container >
 

<Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image src={aboutpic1} className="d-block mx-lg-auto img-fluid" alt="about pic" width="489px" height="335px" loading="lazy"/>
      </div>
      <div className="col-lg-6 text-white">
      <h6 className= {`${classes.about} fw-bold mb-3`}>ABOUT PVS GROUP LTD</h6>

        <h1 className={`${classes.abouthead} display-5 fw-bold lh-1 mb-3 `}>We’ve expanded</h1>
        <p className={`${classes.aboutpara} lead`}>In recent years, PVS Group has expanded, moving to a larger premises in Stockport equipped with state-of-the-art facilities. With a highly knowledgeable team of experts, PVS continues to be a reliable and efficient fleet management provider in the North West. Operating your own fleet service and maintenance division, PVS Group ensures full support for the reliability and availability of clients' commercial vehicles at all times.</p>
        <div className="gap-2 d-md-flex justify-content-md-start">
          <button type="button" className={`${classes.aboutbtn} btn btn-primary btn-lg px-4 me-md`}>About Us</button>
                  </div>
      </div>
    </Row>
  

</Container>
</div>



        </>
    );
}

export default AboutUs;