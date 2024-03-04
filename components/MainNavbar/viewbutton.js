import { Button } from "reactstrap";

function ViewButton(){

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
            
  
                View our vehicles</Button>

        </>
    );
}

export default ViewButton;