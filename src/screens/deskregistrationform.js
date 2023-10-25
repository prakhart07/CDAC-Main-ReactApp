import axios from 'axios';
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../URL';



function NewDesk(){
  
  
  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isThirdButtonEnabled, setIsThirdButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);
  const [id, setId] = useState();
  const [authorityname, setAuthorityName] = useState();
  const [password, setPassword] = useState();
  const [pos, setPos] = useState();
  const [username, setUserName] = useState();
  const [instid, setInstId] = useState();

  async function fetchDataById(event) {
    event.preventDefault();
    console.log("in func fetchdata");
    try {
      const response = await axios.get(`${url.serverUrl}/desk/${id}`);
      console.log('Response:', response.data);

      const fetchedid = response.data.deskId;
      const fetchedauthorityname = response.data.autorityName;
      const fetchedpassword = response.data.password;
      const fetchedpos = response.data.pos;
      const fetchedusername = response.data.username;
      const fetchedinstid = response.data.inst_id;

      document.getElementById('deskid').value = fetchedid;
      document.getElementById('authorityname').value = fetchedauthorityname;
      document.getElementById('instid').value = fetchedinstid;
      document.getElementById('password').value = fetchedpassword;
      document.getElementById('pos').value = fetchedpos;
      document.getElementById('username').value = fetchedusername;
      console.log('Response:', response.data);
      console.log('Response:', response.data.deskId);
      //alert("Desk found")
      
      if(response.data.pos!=null){
        info();
        setIsThirdButtonEnabled(true);
        
        //setIsTagEnabled(true);
      }
      else{
        warning();
        setIsSecondButtonEnabled(true);
        
      }
      
    } catch (error) {
      //alert("Desk not found")
      
      
      console.error('Error:', error);
    }
  }

  //const idToUpdate = 123; // Replace with the actual ID
  // const updatedData = {
  //   //deskId:id,
  //         autorityName:authorityname,
  //         password:password,
  //         pos:pos,
  //         username:username,
  //         inst_id:instid
  // };
//   const config = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// };
  
  //updateDataById(id, updatedData);

  async function updateDataById(event){
    console.log("send",event);
    event.preventDefault();
    try {
        await axios.post(`${url.serverUrl}/desk/${id}`,{
          deskId:id,
          autorityName:authorityname,
          password:password,
          pos:pos,
          username:username,
          inst_id:instid
        
    });
    alert("Desk registration sccessful")

    } catch (error) {
      alert("Desk registration failed")
    }
  }





  
 // updateDataById(id, updatedData);


  async function save(event){
    console.log("send",event);
    event.preventDefault();
    try {
        await axios.post(`${url.serverUrl}/desk`,{
          deskId:id,
          autorityName:authorityname,
          password:password,
          pos:pos,
          username:username,
          inst_id:instid
        
    });
    alert("Desk registration sccessful")

    } catch (error) {
      alert("Desk registration failed")
    }
  }

    return(
        
    <section class="vh-100" Style="background-color:white;">
      <ToastContainer/>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
      
              <h1 class="text-white mb-4">New Desk</h1>
      
              <div class="card" Style="border-radius: 15px;">
                <div class="card-body">
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Desk Id</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="number" size="50px" id="deskid" placeholder="Enter Desk Id" disabled={isTagEnabled}value={id}
                      onChange={(event)=>{
                        setId(event.target.value);
                      }}
                       />
  
                      <br/> 
                      <div class="px-5 py-4">
                      <button type="submit" class="btn btn-primary btn-lg" disabled={isFirstButtonEnabled}onClick={fetchDataById}>Get Desk</button>
                      </div>
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Authority Name</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="authorityname" placeholder="" value={authorityname}
                      onChange={(event)=>{
                        setAuthorityName(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Password</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="password" placeholder="Enter Password" value={password}
                      onChange={(event)=>{
                        setPassword(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>

                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Position</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="pos" placeholder="Enter Position" value={pos}
                      onChange={(event)=>{
                        setPos(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Username</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="username" placeholder="Enter Username" value={username}
                      onChange={(event)=>{
                        setUserName(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Institute Id</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="number" size="50px" id="instid" placeholder="Enter Institute Id" value={instid}
                      onChange={(event)=>{
                        setInstId(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>

                  <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg" disabled={!isSecondButtonEnabled}onClick={save}>Create Desk</button>&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary btn-lg" disabled={!isThirdButtonEnabled}onClick={updateDataById}>Update Desk</button>
                  </div>

                  <br></br>
                  <br></br>
                <br></br>
                <br></br>
                {/* <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Desk Id</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="number" size="50px" id="deskid" placeholder="Enter Desk Id" value={id}
                      onChange={(event)=>{
                        setId(event.target.value);
                      }}
                       />
  
                      <br/> 
                      <div class="px-5 py-4">
                      <button type="submit" class="btn btn-primary btn-lg" onClick={fetchDataById}>Get Desk</button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
   
    )
}

export default NewDesk;
function success(){
  toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
}
function info(){
  toast.info('Desk Already Exist...',{position: toast.POSITION.TOP_CENTER});
}
function warning(){
  toast.warning('Desk does not exist...',{position: toast.POSITION.TOP_CENTER})
}
function error(){
  toast.error('Desk registration failed...',{position: toast.POSITION.TOP_CENTER})
}
  