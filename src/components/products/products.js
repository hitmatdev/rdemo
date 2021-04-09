import React from "react";
import { Container } from "shards-react";
import { BsFillStarFill } from 'react-icons/bs';



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

            <div className="row">
              <div className="col-lg-8 mx-auto">
                <ul className="list-group shadow">
                    <li className="list-group-item">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>
                    <li className="list-group-item left-margin">
                      <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                          <h5 className="mt-0 font-weight-bold mb-2">Ambulance</h5>
                          <p className="font-italic text-muted mb-0 small"> Very fast service all over India</p>
                            <div className="d-flex align-items-lg-center justify-content-between mt-1">
                              <h6 className="font-weight-bold my-2">Rs. 5000 </h6> 
                              <ul className="list-inline-small">
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill className="text-success"/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                                <li className="list-inline-item m-0"><BsFillStarFill/></li>
                              </ul>
                            </div>
                        </div><img className="ml-lg-5 order-1 order-lg-2" src={process.env.PUBLIC_URL + "/img/heart.jpg"} alt="Card image cap" width="200px"/>
                      </div>
                    </li>                    
                </ul>
              </div>
            </div>
        </Container>
            )       
    
    
    
    
    
  }
}

export default Products;