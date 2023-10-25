import axios from 'axios';
import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../URL';



function NewAdmissionForm(){

  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);

  const [instituteStatus, setInstituteId] = useState("");
  const [courseStatus, setCourseStatus] = useState("");
  const [percentage, setPercentage] = useState("");
  const [academicyear, setAcadenicyear] = useState("");
  const [uid, setUid] = useState("");


  async function save(event){
    event.preventDefault();
    try {
        await axios.post(`${url.serverUrl}/academic`,{
        instituteStatus:instituteStatus,
        courseStatus:courseStatus,
        percentage:percentage,
        academicyear:academicyear
        
    });
    alert("Student registration sccessful")

    } catch (error) {
      alert("Student registration failed")
    }
  }




  async function fetchDataById(event) {
    event.preventDefault();
   // disableInput();
    console.log("in func fetchdata");
    try {
      const response = await axios.get(`${url.serverUrl}/student/${uid}`);
      console.log('Response:',response.data);

      
      console.log('Response data:',response.data.contact);

      
      alert("Student found")
      console.log('Response:', response.data);
      if(response.data.contact!=null){
        info();
        //setIsThirdButtonEnabled(true);
        
        //setIsTagEnabled(true);
      }
      else{
        warning();
        setIsSecondButtonEnabled(true);
        
      }
      
    } catch (error) {
      alert("Student not found")
      console.error('Error:', error);
    }
  }









    return(
        
    <section class="vh-100" Style="background-color:white;">
        <div class="container h-100">
          <ToastContainer/>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
      
              <h1 class="text-white mb-4">New Admission</h1>
      
              <div class="card" Style="border-radius: 15px;">
                <div class="card-body">
      
                <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Student's UId</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="instituteid" disabled={isTagEnabled}placeholder="Enter Student's UId" value={uid}
                      onChange={(event)=>{
                        setUid(event.target.value);
                      }}
                       />
                        <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg" disabled={isFirstButtonEnabled} onClick={fetchDataById}>Get Uid</button>
                  </div>
                  
                      <br/> 
      
                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Institute Id</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="instituteid" placeholder="Enter Institute Id" value={instituteStatus}
                      onChange={(event)=>{
                        setInstituteId(event.target.value);
                      }}
                       />

                      <br/> 
      
                    </div>
                  </div>

      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Course Status</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="cousrestatus" placeholder="Enter Course Status" value={courseStatus}
                      onChange={(event)=>{
                        setCourseStatus(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Percentage</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="course" placeholder="Enter percentage" value={percentage}
                      onChange={(event)=>{
                        setPercentage(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>
                  <hr class="mx-n3"/>

                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Academic Year</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="date" size="50px" id="academicyear" placeholder="" value={academicyear}
                      onChange={(event)=>{
                        setAcadenicyear(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>

                  <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg" onClick={save} disabled={!isSecondButtonEnabled}>Add Academic Record</button>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
   
    )
}

export default NewAdmissionForm;
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