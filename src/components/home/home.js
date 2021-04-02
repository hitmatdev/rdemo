import React from "react";
import {Container, Row} from "shards-react";

import '../../css/custom.css';




class Home extends React.Component
{
  

  state = {
    articles: []
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
    
    
  }

 

  render() 
  {
   
   

    
    


    return (
        <Container style={{ paddingTop: "10px" }}>


          
   <section className="bgimage">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bgimage-text ">
      <div className ="container-banner">
       <div className="animation">
          <p className="text-center"> React Demo Portal</p> 
       </div>
       <h5>
     Technology, Demos and Proof of Concepts
  </h5>
  
     </div>
    
     
      </div>

    </div>
  </div>
</section>


           <Row style={{ paddingTop: "30px" }}>
          
         <h1>New Section</h1>
        </Row>
      
        </Container>
        
    )       
    
    
    
    
    
  }
}

export default Home;