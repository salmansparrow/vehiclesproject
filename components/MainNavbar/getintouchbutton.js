import { Button } from "reactstrap";

function GetinTouchButton(){

    const buttonStyles = {
        backgroundColor: "#3989C9",
        width: "207px",
        height: "50px",
        marginRight: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

    return (
        <>
                
                <Button className="btn" href='/' style={buttonStyles}>
            
  
                Get in touch</Button>

        </>
    );
}

export default GetinTouchButton;