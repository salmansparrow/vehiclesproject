import Image from "next/image";
import { Button } from "reactstrap";
import phoneicon from "@/components/icons/phone-telephone.png"

function PhoneCall(){

    const buttonStyles = {
        backgroundColor: "#3989C9",
        width: "164px",
        height: "50px",
        marginRight: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

    return (
        <>
                
                <Button className="btn" href='/' style={buttonStyles}>
                <svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5146 18.5717C13.3944 19.1393 14.4427 19.3866 15.4834 19.2721C16.5241 19.1576 17.4936 18.6883 18.2289 17.9431L18.8718 17.3146C19.1536 17.0263 19.3114 16.6391 19.3114 16.236C19.3114 15.8328 19.1536 15.4457 18.8718 15.1574L16.1432 12.4574C15.8574 12.1765 15.4726 12.0191 15.0718 12.0191C14.671 12.0191 14.2862 12.1765 14.0004 12.4574C13.7121 12.7392 13.3249 12.8971 12.9218 12.8971C12.5186 12.8971 12.1315 12.7392 11.8432 12.4574L7.5575 8.1717C7.41453 8.03081 7.301 7.8629 7.22351 7.67774C7.14601 7.49257 7.10611 7.29385 7.10611 7.09313C7.10611 6.8924 7.14601 6.69368 7.22351 6.50852C7.301 6.32335 7.41453 6.15545 7.5575 6.01455C7.83843 5.72869 7.99585 5.34393 7.99585 4.94313C7.99585 4.54233 7.83843 4.15756 7.5575 3.8717L4.84321 1.15741C4.55494 0.875577 4.1678 0.717773 3.76464 0.717773C3.36149 0.717773 2.97434 0.875577 2.68607 1.15741L2.0575 1.80027C1.31228 2.53561 0.842975 3.50513 0.728502 4.54579C0.614029 5.58646 0.861367 6.6348 1.42893 7.51456C4.38613 11.8727 8.14884 15.6257 12.5146 18.5717Z" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
  
                   Phone</Button>

        </>
    );
}

export default PhoneCall;