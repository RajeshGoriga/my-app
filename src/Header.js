import React from 'react';
import { Button, Card} from 'react-bootstrap';
import "./App.css";

const Header = () => {
  return (
    <div>
       <Card className="bg-dark text-dark">
      <Card.Img src={require('./images/wallpaper.jpeg')} alt="" />
      <Card.ImgOverlay>
        <Card.Text >
      <center > <h1 className='text-primary'>Discover Top Talent </h1><br/>
      <h3 className='text-primary'>AI Powered Talent  Solutuion</h3><br/>
      <h6>Unlock Top-tier candiates matched to you specific needs<br/>
      effortlessly with our AI Driven platform Streamlined hiring,<br/>
      exptectional result</h6><br/>
      <Button>Hire with AI Precision</Button></center>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  

    </div>
  )
}

export default Header
