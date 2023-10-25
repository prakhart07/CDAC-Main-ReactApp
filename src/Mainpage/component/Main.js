import React ,{Component}from 'react';
//import MainContainer from '../Container/MainContainer';
//import Footer from './footer/Footer';
import { BrowserRouter } from "react-router-dom";
import MainContainer from '../Container/MainContainer';
import Footer from './Footer/Footer';
//import Header from './header/Header';
//import { Navbar } from 'react-bootstrap';
//import Edit from './edit/Edit';
//import Slider from './slider/Slider';
//import Navbar from './Navbar/Navbar';
//import NewProfile from './profile/NewProfile';
import MyNav from './Navbar/MyNav';
import Slider from './Slider/Slider';
 

class Main extends Component{


    render() {
        return (
          <div> 
              <BrowserRouter>
                <div>

                 
               
                 <div><MyNav></MyNav></div>
                 <div><Slider></Slider></div>
                 <div><MainContainer></MainContainer></div>
                 <div><Footer></Footer></div>

                 

                
    
                </div>

              </BrowserRouter>         
          </div>
        );
      }

    }

export default Main;