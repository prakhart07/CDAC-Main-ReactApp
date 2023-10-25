import '../Container/Maincontainer.css';
import {Switch, Route} from 'react-router-dom';
import React,{Component} from 'react';
import {Container,Row} from 'react-bootstrap';
import Upload from '../component/Upload/Upload';
import Signup from '../component/Signup/Signup';






class MainContainer extends Component{

    render() {
        return (          
          <Container fluid >      
          <Row>
            <Switch>
               
                
                
                

                   <Route path = "/upload" component = {Upload} />
                   <Route path = "/signup" component = {Signup} />
                   
                
                 
                
                
              
               
                               
                   
                
            </Switch>
          </Row> 
        </Container>
        );
      }
}
export default MainContainer;