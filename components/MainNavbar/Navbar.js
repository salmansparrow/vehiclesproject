import { Button, Col, Container, Row } from "reactstrap";
import classes from "./navbar.module.css"
// import NavbarLogo from "./navbarlogo"
import Link from "next/link";
import navbarlogo from "@/components/icons/navbarlogo.svg"
import Image from "next/image";
import navRect from "@/public/images/navRect.png"
import navVechImage from "@/public/images/navVecimage.png"

function MainNavbar(){

    return (
        <>
        <div style={{backgroundColor: "#D8ECFF", paddingTop: "20px", height:"821px" }}>
        <Container >
        <nav className="navbar navbar-expand-lg bg-body-transparent" style={{ zIndex: 1000, marginTop:"20px" }}>
  <div className="container-fluid">
    <Link href="/"> <Image src={navbarlogo}/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-lg-5 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active me-5" aria-current="page" href="#">Fleet management</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5" href="#">Our services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-5" href="#">About us</a>
        </li>

        <li className="nav-item">
        <Link href="/">
          <button className={`${classes.btn} btn`}>Contact Us</button>
          </Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>

<Row className="flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-9 col-sm-8 col-lg-8">
      <Image
      src={navVechImage}
      className={` ${classes.navimage1} img-fluid d-block d-sm-none`}
      style={{marginLeft:"120px"}}
    
      alt="about pic"
      loading="lazy"
    />
    {/* Larger image for larger screens */}
   
    <Image
      src={navVechImage}
      className={` ${classes.navbarimage2} img-fluid d-none d-sm-block`}
      alt="about pic"
      loading="lazy"
      style={{ zIndex: 2 }}

    />
      <Image
      src={navRect}
      className={` ${classes.navreact} img-fluid d-none d-sm-block`}
      alt="about pic"
      loading="lazy"
      style={{ zIndex: 1 }}
    />
      </div>
      <div className="col-lg-4">
      <h6 className={`${classes.navbarFirstHeading} mb-3`}>WE MAKE COMMERCIAL SPACE</h6>

        <h1 className={`${classes.navbar2ndHeading}`}>Leading commercial vehicle specialists for over 40 years</h1>
        <p className={`${classes.para} lead`}>We’re specialists in Commercial Fleet Management, Vehicle sourcing, servicing and maintenance and we operate Nationwide. We cater to everything from individual vehicle sale, supplying entire business fleets to comprehensive maintenance management.</p>
        <div className={`${classes.navbtns}  gap-2 d-flex justify-content-md-start `}>
       <Link href="/"> <button type="button" className={`${classes.navbtns} btn`} style={{width:"207px", height:"62px", backgroundColor:"#3989C9"}}>View our vehicles</button></Link>
       <Link href="/">  <button type="button" className={`${classes.navbtns} btn`} style={{width:"207px", height:"62px", backgroundColor:"#ED652B"}}>Get in touch</button></Link>


                  </div>
                  
      </div>
    </Row>

</Container>
</div>
        </>
    )

}

export default MainNavbar;