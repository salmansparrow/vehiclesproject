import { Col, Container, Row } from "reactstrap";
import classes from "./keepupdate.module.css";
import Link from "next/link";
import Image from "next/image";
import linkdin from "./icons/linkdin.svg";
import facebook from "./icons/facebook.svg";
import insta from "./icons/insta.svg";
import ebay from "./icons/ebay.svg";
import keepimag1 from "@/public/images/keepupdate/img1.svg";
import keepimag2 from "@/public/images/keepupdate/img2.svg";
import keepimag3 from "@/public/images/keepupdate/img3.svg";
import keepimag4 from "@/public/images/keepupdate/img4.svg";
import keepimag5 from "@/public/images/keepupdate/img3.svg";




function KeepUpdate(){
    return (
        <>
        <div className="my-5">

        <Container>
        <Row>
                {/* Left Side: Heading and Paragraph */}
                <Col lg={6}>
                    <h2 className={classes.keepheading}>Keep up-to-date</h2>
                    <p className={classes.keeppara}>
                        Don’t miss out on the latest news, content, and deals from PVS Group
                    </p>
                </Col>

                {/* Right Side: Social Icons */}
                <Col lg={6} className=" d-flex justify-content-end align-items-center">
                    {/* Add your social icons here */}
                
                <Link  href="/" className="text-white py-1 text-decoration-none fs15 me-4">
                <Image src={linkdin} alt="image1"/>
                </Link>
                <Link href="/" className="text-white py-1 text-decoration-none fs15 me-4">
                <Image src={facebook} alt="image2"/>

                </Link>
                <Link href="/" className="text-white py-1 text-decoration-none fs15 me-4">
                <Image src={insta} alt="image3"/>

                </Link>
                <Link href="/" className="text-white py-1 text-decoration-none fs15">
                <Image src={ebay} alt="image4"/>

                </Link>

                </Col>
            </Row>

            {/* Responsive Images */}
            <Row className="mt-4" >
                <Col sm={6} md={4} lg={2} >
                    <Image src={keepimag1} alt="Image 1" className={`${classes.keepimg} img-fluid mb-3`} />
                </Col>
                <Col sm={6} md={4} lg={2}>
                    <Image src={keepimag2} alt="Image 2" className="img-fluid mb-3" />
                </Col>
                <Col sm={6} md={4} lg={2}>
                    <Image src={keepimag3 } alt="Image 3" className="img-fluid mb-3" />
                </Col>
                <Col sm={6} md={4} lg={2}>
                    <Image src={keepimag4} alt="Image 4" className="img-fluid mb-3" />
                </Col>

                <Col sm={6} md={4} lg={2}>
                    <Image src={keepimag5} alt="Image 4" className="img-fluid mb-3" />
                </Col>



                {/* Add more images as needed */}
            </Row>
        </Container>

        </div>
        </>
    );
}

export default KeepUpdate;