import { Button } from "reactstrap";
import mailicon from "./mail-send-email.png";
import Image from "next/image";

function MailSendPage() {
  const buttonStyles = {
    backgroundColor: "#ED652B",
    width: "164px",
    height: "50px",
    marginRight: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  
  



  return (
    <Button className="btn button" href="/" style={buttonStyles}>

<svg className="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.31105 15.7032L11.4282 18.8161C11.6217 19.0096 11.8615 19.1505 12.1247 19.2253C12.3879 19.3001 12.6659 19.3064 12.9323 19.2435C13.1986 19.1807 13.4445 19.0508 13.6466 18.8663C13.8486 18.6817 14.0001 18.4486 14.0868 18.189L19.2025 2.82753C19.297 2.54477 19.3108 2.24127 19.2424 1.9511C19.174 1.66092 19.0261 1.39554 18.8153 1.18473C18.6045 0.973919 18.3391 0.826022 18.0489 0.757629C17.7587 0.689236 17.4552 0.703054 17.1725 0.797532L1.81105 5.91753C1.55227 6.00449 1.31994 6.15598 1.13601 6.3577C0.952068 6.55942 0.822597 6.80471 0.759824 7.07039C0.697051 7.33606 0.70305 7.61336 0.777253 7.87607C0.851457 8.13878 0.991415 8.37824 1.1839 8.57182L5.09962 12.4918L4.96676 17.4418L8.31105 15.7032Z" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7439 1.11719L5.09961 12.4915" stroke="white" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
</svg>



      Email
    </Button>
  );
}

export default MailSendPage;
