import React from 'react';
import {Card} from 'react-bootstrap';
import "./App.css";
const Sucess = () => {
  return (
    <div>
       <Card className="bg-dark text-dark">
      <Card.Img src={require('./images/background.jpeg')} alt="" />
      <Card.ImgOverlay>
        <Card.Text >
        <center>
      <p>Hear from our Partners</p>
      <h5 className='text-primary'>Sucess stories and Experiences</h5>
      <div>
        <h5 classname="text-primary">Compnay Name</h5>
        <h6>"Lorem ipsum dolor sit amet consecteur" </h6>
       <p> Porttior pharetra at phaertra id imperdiet et sed odio.Lorem<br/>
       ipsum dolor sit amet consectetur.Lorem ipsum dolor sit <br/>
       amet consectetur . Porttior pharetra at phaertra id imperdiet et sed odio.Lorem<br/>
       Porttior pharetra at phaertra id imperdiet et sed odio.Lorem<br/>
       Porttior pharetra at phaertra id imperdiet et sed odio.Lorem<br/>
       Porttior pharetra at phaertra id imperdiet et sed odio.Lorem<br/>
       </p>
       Client Name<br/>
       Position
      </div>
      </center>
      </Card.Text>
      </Card.ImgOverlay>
      </Card>
    </div>

  )
}

export default Sucess
