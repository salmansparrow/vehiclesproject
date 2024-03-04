import Image from "next/image"
import footerLogo from "@/public/images/Footer-logo.png"

function FooterLogo(){

    return (
        <>
            <Image src={footerLogo} alt="footer logo"/>
        </>
    )
}

export default FooterLogo;