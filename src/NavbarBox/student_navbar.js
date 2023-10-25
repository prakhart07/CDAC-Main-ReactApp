import "./navbar.css";
import { useHistory } from "react-router-dom";
import "./css/navbar.css";

function StudentNavbar(){

    const history = useHistory();
   const Navigate = (path)=>{
    
     history.push(path);
   }
    return(
        <div className="table table-responsive">
          
            
        <div className="navbar-header">
           <table className="table table-bordered"> 

          {/* <tr>
              <td Style="width: 300px; "> */}
          <ul className="nav flex-column">
                <li className="nav-item">
                  <button className="btn btn-info buttons" onClick={() => Navigate("/studentinfo")}>Data</button>
                </li>
                {/* <li className="nav-item">
                  <button className="btn btn-info buttons">Admission</button>
                </li>  */}
            </ul>
          {/* </td>
          </tr> */}
          </table>
      </div>
  





</div>
    );
}
export default StudentNavbar;