import React from "react";
import { Container } from "shards-react";
import '../../css/custom.css'
import ListGroup from "react-bootstrap/ListGroup";

import {
  BsFillBellFill,
  BsFillChatDotsFill,
  BsFillPersonFill,
  BsPower,
  BsFillPeopleFill
}
 from 'react-icons/bs';

 class Leftnav extends React.Component 
 {
  
  render() {
    return (
      <Container>
        <ul className="list-group top-margin">
          <li className="list-group-item d-flex justify-content-between align-items-center">Notifications <BsFillBellFill/><span className="badge badge-primary badge-pill">14</span></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">Messages <BsFillChatDotsFill/><span className="badge badge-primary badge-pill">10</span></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">Groups <BsFillPeopleFill/><span className="badge badge-primary badge-pill">3</span></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">My Account <BsFillPersonFill/></li>
          <li className="list-group-item d-flex justify-content-between align-items-center">Logout <BsPower/></li>
        </ul>
      </Container>
    );
  }
}

export default Leftnav;