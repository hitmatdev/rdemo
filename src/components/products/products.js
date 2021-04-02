import React from "react";
import { Container } from "shards-react";




class Products extends React.Component
{
  

  state = {
    articles: []
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
    
  }

  render() {
   
    return (
        <Container>
          <h2 className="h1-responsive font-weight-bold text-center my-4">Products list</h2>

          <ul className="list-group">
              <li className="list-group-item">Accu-check</li>
              <li className="list-group-item">Infrared Temperature Machine</li>
              <li className="list-group-item">Blood Pressure Machine</li>
              <li className="list-group-item">Stethoscope</li>
              <li className="list-group-item">Pulse reader</li>
          </ul>

        </Container>
            )       
    
    
    
    
    
  }
}

export default Products;