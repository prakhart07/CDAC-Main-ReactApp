import { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './common.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AdminLogin(data){

  

const history = useHistory(); 

// useEffect(()=>{
// if(message!="")
// {
// setTimeout(() => {
//   setmessage("");
// }, 3000);
// }
// }, [message])

// const OnTextChange =(args)=>{
// var copyOfcredentials = {...credentials};
// copyOfcredentials[args.target.name] = 
//                   args.target.value;
// setcredentials(copyOfcredentials);
// }
// const SignIn = ()=>{
// debugger;
// var helper = new XMLHttpRequest();

// helper.onreadystatechange=()=>{
// if(helper.readyState == 4 &&
//   helper.status == 200)
//   {
//       debugger;
//      var responseReceived = 
//       JSON.parse( helper.responseText);
//       if(responseReceived.isValid 
//           == 'true')
//       {
//         alert("Login sccessful")
// sessionStorage.setItem("isloggedin", true);
// sessionStorage.setItem("username",credentials.username);
//       props.setUserName(credentials.username)

//       history.push("/");
          
//       }
//       else
//       {
//         alert("Login Failed... Invaild credentials")  
//         setmessage("Credentials are invalid!");
//           setcredentials({username: "", password:""});
//       }
// }
// }
// helper.open("POST", 
// "http://192.168.144.185:8080/desk/signin");

// helper.setRequestHeader("Content-Type", "application/json")

// var credentialsInString = JSON.stringify(credentials);

// var credentialsInEncoded = window.btoa(credentialsInString)

// var details ={"credentials":
// credentialsInEncoded }
// //helper.send(JSON.stringify(details));
// helper.send(JSON.stringify(credentials));



// const credentials = {
//   username:username,
//   password:password
// };

// Make a POST request to log in the user
const [username, setUsername] = useState('');
  
  const handleLogin = (username) => {
    console.log("in setting session")
    console.log(username);
    setUsername(username);
    localStorage.setItem('username', username);
  };
  
  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

//const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //HardCoded login with localstorage
  const localusername=localStorage.getItem("username");
  const localpassword=localStorage.getItem("password");
  if(localusername =="admin" && localpassword=="admin@123"){
      history.push("/dashboard");
  }


 function SignIn(){

  

  if(username =="admin" && password=="admin@123")
  {
    localStorage.setItem("username","admin");
    localStorage.setItem("password","admin@123");
    history.push("/dashboard");
  }
  else


  //console.log("in signin func");
  var response=axios.post('http://172.18.5.53:7070/adminlogin/signin',{
  username:username,
  password:password
})
  .then(response => {
    console.log(data);
    console.log(response.data);
    handleLogin(username);
    console.log('User logged in successfully:', response);
    
    //history.push("/desk");

    
    if(response.data==true)
    alert("User logged in successfully")

    
    history.push("/dashboard");
    // if(response.data.username=="admin")
    // history.push("/registration");
    // else{
    //   history.push("/info");
    // }
    // You can perform further actions here, like storing the user token or navigating to the user's dashboard.
  })
  .catch(error => {
    console.error('Error logging in:', error);
    alert("Error logging in")
    // You can handle the error here, like displaying an error message to the user.
  });
}

        return(
          <div className="form-floating">
            <ToastContainer/>
            <div className="container">
            <div className="row justify-content-center">
            
            <center>
                     <h1>Centralized Education Database Management System Web App</h1>
                     
                    </center>
                    
              <div className="col-md-3" style={{marginTop: '100px', maxwidth: '200px'}}>
                     
                    <center>
                <h3 className="mb-3">Login</h3>
                    </center>
                <div className='form'>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username"value={username}
                      onChange={(event)=>{
                        setUsername(event.target.value);
                      }}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password"value={password}
                      onChange={(event)=>{
                        setPassword(event.target.value);
                      }}/>
                  </div>
                  <center>
                  <button type="submit" className="btn btn-primary"onClick={SignIn}>Login</button>&nbsp;&nbsp;
                  <a type="submit" className="btn btn-danger" href="./Auth/otp.js">Forgot Password</a>
                  </center>
                  </div>
              </div>
            </div>
          </div>
          </div>
        )
}
export default AdminLogin;