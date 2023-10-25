import { useHistory } from "react-router-dom";
import "./navbar.css";


function HeadOffNavbar(){
    const history = useHistory();
   const Navigate = (path)=>{
    
     history.push(path);
   }
   
    return(
        <div className="table table-responsive">
       
          
            <div className="navbar-header">
               <table className="table table-bordered"> 


             
              <ul className="nav flex-column">
              <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/registrationinst")}>Student Registration</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/admissioninst")}>New Admission</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-info buttons" onClick={() => Navigate("/uploadinst")}>Uploaded Data</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-info buttons" onClick={() => Navigate("/withdrawinst")}>Withdraw</button>
                      </li>
                      <li className="nav-item">
                        <button className="btn btn-info buttons" onClick={() => Navigate("/infoinst")}>Data</button>
                      </li> 
                </ul>
              
              </table>
          </div>
      
  




</div>
    );
    
}

export default HeadOffNavbar;