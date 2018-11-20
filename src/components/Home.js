import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Button} from 'react-bootstrap';
import {Card} from 'reactstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      
        <Jumbotron>
          
          <Card>

              <h4>Greentech Innovation Group</h4>
              <br/>
              <h8>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The art of developing software using popular frameworks acrross the Globe, such as reactJS, VueJS, ExpressJS. Building mobile app, android app and also desktop app for productivity. Greentech Innovation Group is always ready for preserving the nature via modern software developement role. </h8>
              <br/>
              <br/>
              <br/>
              <br/>
              <Link to="/about">
                <Button bsStyle="success" bsSize="md">Getting Started</Button>
              </Link>

          </Card>

        </Jumbotron>
      
    )
  }
}
