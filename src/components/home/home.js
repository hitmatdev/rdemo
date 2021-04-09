import React from "react";
import {Container, Row} from "shards-react";
import Carousel from 'react-bootstrap/Carousel' ;

import '../../css/custom.css';



class Home extends React.Component
  {
  state = {
   
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
     
  }


  render() 
  {
    return (
        <Container style={{ paddingTop: "10px" }}>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              
              <Carousel>  
                <Carousel.Item style={{'height':"300px"}} >  
                  <img style={{'height':"300px"}} className="d-block w-100" src={'img/blood.jpg'} />  
                  <Carousel.Caption>  
                   <h3>First Demo </h3>  
                  </Carousel.Caption>  
                </Carousel.Item  >  
                <Carousel.Item style={{'height':"300px"}}>  
                  <img style={{'height':"300px"}} className="d-block w-100" src={'img/ambulance.jpg'}    />  
                  <Carousel.Caption>  
                    <h3>Second Demo</h3>  
                  </Carousel.Caption>  
                </Carousel.Item>  
                <Carousel.Item style={{'height':"300px"}}>  
                  <img style={{'height':"300px"}} className="d-block w-100" src={'img/staff.jpg'}   />  
                  <Carousel.Caption>  
                    <h3>Third Demo</h3>  
                  </Carousel.Caption>  
                </Carousel.Item>  
              </Carousel> 
            </div>
            <div className="col-lg-2"></div>
          </div>
        </Container>
        
    )    
  }
}

export default Home;