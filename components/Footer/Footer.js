import { Col,Container,Row,} from "reactstrap";
import classes from "./footer.module.css"
import Link from "next/link";
import MailSendPage from "../icons/mail-send";
import PhoneCall from "../icons/phone-call";
import Whatsapp from "../icons/whatsapppage";
import HR from "@/components/icons/Hr";
import Schedule from "./schedule";
import FooterLogo from "../icons/FooterLogo";
import LinkedInlogo from "../icons/LinkedIn";
import FacebookLogo from "../icons/facebook";
import InstagramLogo from "../icons/Instagram";
import EbayLogo from "../icons/Ebay";
import footerpic from "@/public/images/footer-pic/image 176.png";
import Image from "next/image";



function FooterPage(){
  return (<>


    <div className={`${classes.bgcolor} text-white`}>
    
    <Container >
    
    <Row className="flex-lg-row align-items-center text-lg-left mb-0">
  
      <div className="col-12 col-lg-6 text-white">
        <h1 className={`${classes.footerheaed} display-5 fw-bold lh-1 mb-3`}>Get in touch with us and find out how we can help your business</h1>
        <p className={`${classes.footerpara} lead`}>With over 40 years of motor industry experience, our expertise and knowledge are unparalleled. Whatever you need, we're here to help.</p>
      </div>
      <div className="col-12 col-lg-6 mt-3">
        <Image src={footerpic} className="d-block mx-auto me-lg-5 mt-lg-5 img-fluid" alt="about pic" style={{ width: '417px', height: '407px' }} loading="lazy" />
      </div>

    </Row>
      <Row>

      <Col className="p-1 col-lg-6  d-flex">

        <MailSendPage/>
        <PhoneCall/>
        <Whatsapp/>
        </Col>
              </Row>

              <Row>
              <Col className="col-lg-4 col-sm-8 d-none d-sm-block">
              <Schedule />
              </Col>
              </Row>
              <Row>
              <Col className="col-lg-12 col-sm-8">
                                 
               <HR/>

            </Col>

            
              </Row>
              <footer className=" footer row py-5 my-5"> 
  <div className="col">
    <Link href="/" className="d-flex mb-3 link-dark">
      <FooterLogo />
    </Link>
  </div>

  <div className="col">
    <h5>About us</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2 "><Link href="#" className="nav-link p-0"><span className={classes.span}> Founding Principles</span></Link></li>
      <li className="nav-item mb-2"><Link href="#" className="nav-link p-0"><span className={classes.span}> Careers </span></Link></li>
    </ul>
  </div>

  <div className="col">
    <h5>Section</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2"><Link href="#" className="nav-link p-0"><span className={classes.span}>Fleet Management</span></Link></li>
      <li className="nav-item mb-2"><Link href="#" className="nav-link p-0"><span className={classes.span}>Service & Maintenance</span></Link></li>
      <li className="nav-item mb-2"><Link href="#" className="nav-link p-0"><span className={classes.span}>Vehicle Sourcing</span></Link></li>
    </ul>
  </div>

  <div className="col-lg-3 ">
    <h5>Contact us</h5>
    <ul className="nav flex-column">
      <li className="nav-item mb-2">9 Oak Street, Stockport, SK7 4EJ</li>
      <li className="nav-item mb-2"> <span className={classes.span}>Email:</span> paul@pvsgroupltd.co.uk</li>
      <li className="nav-item mb-2"><span className={classes.span}>General enquiries:</span> 0161 503 0560</li>
      <li className="nav-item"><span className={classes.span}>Sales:</span> 07816 578462</li>
    </ul>
  </div>

  <div className="col-lg-2 order-lg-2 text-lg-end ">
    <h4 className="fs15 fw700 mb-3">Social Link</h4>
    <Link href="/" className="text-white py-1 text-decoration-none fs15 me-4">
      <LinkedInlogo />
    </Link>
    <Link href="/" className="text-white py-1 text-decoration-none fs15 me-4">
      <FacebookLogo />
    </Link>
    <Link href="/" className="text-white py-1 text-decoration-none fs15 me-4">
      <InstagramLogo />
    </Link>
    <Link href="/" className="text-white py-1 text-decoration-none fs15">
      <EbayLogo />
    </Link>

  </div>
</footer>



      </Container>
      </div>

      
        
  </>
  )
}

export default FooterPage;