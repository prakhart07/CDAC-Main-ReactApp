import WithdrawForm from "./withdrawform";
import RegistrationNavbar from "./NavbarBox/registration_navbar";
function Withdraw(){
    return(
        <div className="table table-responsive">
          <center>
                     <h1 style={{color:'ActiveBorder'}}>Centralized Education Database Management System Web App</h1>
                    </center>
        <table>
        <tr>
           <td><RegistrationNavbar/></td>
           <td Style="width:100%">
              
             <WithdrawForm></WithdrawForm>
  
           </td>
        </tr>
      </table>
        </div>
    )
}
export default Withdraw;