import React from "react";
import { Button, Card } from "react-bootstrap";

const Footer = () => {
return (
	<div>
		<div>
		<Card className="bg-dark text-dark">
      <Card.Img src={require('./images/footer.jpeg')} alt="" />
      <Card.ImgOverlay>
		<center>
        <Card.Text ><h4>Discover Power of Precision Hiring-Contect With the  Perfect Talent<br/>
		Faster and Smarter</h4> <br/>
		<Button> Start Hiring Better Today</Button>
		</Card.Text>
		</center>
      </Card.ImgOverlay>
    </Card>
		</div>

			<div></div>
				
				<div></div>
			
		</div>
	
	
);
};
export default Footer;
