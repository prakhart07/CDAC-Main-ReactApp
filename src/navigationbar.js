import './navigationbar.css';
import { useHistory } from 'react-router-dom';
import RegistrationNavbar from "./NavbarBox/registration_navbar";


function NavigationBar(){
    const history = useHistory();
    const Navigate = (path)=>{
        history.push(path);
      }

    return(
    <div class="header">
            <a href="#default" class="logo">ShikshBharat</a>
                    <a>
                     <h1>Centralized Education Database Management System Web App</h1>
                    </a>
        <div class="header-right">
            <a class="active" href="#home" >Home</a>
            <a href='http://localhost:3000/login'>Admin </a>
            <a href="#about">Institute</a>
            <a href="#about">Student's Corner</a>
        </div>

    </div>
    );
}
export default NavigationBar;