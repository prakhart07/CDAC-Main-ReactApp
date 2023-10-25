import axios from 'axios';
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../URL';


function NewCourse(){

  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isThirdButtonEnabled, setIsThirdButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);


  //courseid(long),coursename,medium,durationyear(int)
  const [courseid, setCourseId] = useState();
  const [coursename, setCourseName] = useState();
  const [medium, setMedium] = useState();
  const [durationyear, setDurationyear] = useState();


  async function fetchDataById(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`${url.serverUrl}/course/${courseid}`);
      console.log('Response:', response.data);
      console.log('Response:', response.data.courseId);
      console.log('Response:', response.data.courseName);
      console.log('Response:', response.data.medium);
      console.log('Response:', response.data.durationYear);

      const fetchedcousreid = response.data.courseId;
      const fetchedcoursename = response.data.courseName;
      const fetchedmedium = response.data.medium;
      const fetcheddurationyear = response.data.durationYear;

      document.getElementById('courseid').value = fetchedcousreid;
      document.getElementById('coursename').value = fetchedcoursename;
      document.getElementById('medium').value = fetchedmedium;
      document.getElementById('durationyear').value = fetcheddurationyear;
      
      // console.log('Response:', response.data.courseName);
      // console.log('Response:', response.data.course_name);

      if(response.data.courseId!=null){
        info();
        setIsThirdButtonEnabled(true);
        
        //setIsTagEnabled(true);
      }
      else{
        warning();
        setIsSecondButtonEnabled(true);
        
      }
    } catch (error) {
      alert("student not found...")
      warning();
        setIsSecondButtonEnabled(true);
      console.error('Error:', error);
    }
  }


  async function save(event){
    console.log("send",event);
    event.preventDefault();
    console.log("send",event.target.medium);
    try {
        await axios.post(`${url.serverUrl}/course`,{
          courseId:courseid,
          courseName:coursename,
          medium:medium,
          durationYear:durationyear
           
    });
    alert("Course registration sccessful")
    success();

    } catch (error) {
      alert("Course registration failed")
      fail();
    }
  }

  // const updatedData = {
  //   //deskId:id,
  //   courseId:courseid,
  //   courseName:coursename,
  //   medium:medium,
  //   durationYear:durationyear
  // };


  //updateDataById
  async function updateDataById(event){
    console.log("updateDataById",event);
    event.preventDefault();
    console.log("updateDataById",medium);
    try {
        await axios.post(`${url.serverUrl}/course/${courseid}`,{
          courseId:courseid,
          courseName:coursename,
          medium:medium,
          durationYear:durationyear
           
    });
    alert("Course updation sccessful")
    success();

    } catch (error) {
      alert("Course updation failed")
      fail();
    }
  }
  



    return(
        
    <section class="vh-100" Style="background-color:white;">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-9">
      
              <h1 class="text-white mb-4">New Course</h1>
      
              <div class="card" Style="border-radius: 15px;">
                <div class="card-body">
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Course Id</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="number" size="50px" id="courseid" placeholder="Enter Course Id" value={courseid}
                      onChange={(event)=>{
                        setCourseId(event.target.value);
                      }}
                       />
                       <div class="px-5 py-4">
                    <button type="submit" class="btn btn-info btn-lg" disabled={isFirstButtonEnabled} onClick={fetchDataById}>Get Course</button>
                  </div>

                      <br/> 
      
                    </div>
                  </div>

                  {/* <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg">Add Student</button>
                  </div> */}
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Course Name</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="coursename" placeholder="Enter Course name" value={coursename}
                      onChange={(event)=>{
                        setCourseName(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
      
                  <hr class="mx-n3"/>
      
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Medium</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="text" size="50px" id="medium" placeholder="Enter medium" value={medium}
                      onChange={(event)=>{
                        setMedium(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>
                  <hr class="mx-n3"/>
                  <div class="row align-items-center pt-4 pb-3">
                    <div class="col-md-3 ps-5">
      
                      <h5 class="mb-0">Duration Year</h5>
      
                    </div>
                    <div class="col-md-9 pe-5">
      
                      <input type="number" size="50px" id="durationyear" placeholder="" value={durationyear}
                      onChange={(event)=>{
                        setDurationyear(event.target.value);
                      }}
                       />
                       <br/>

                    </div>
                  </div>
                  <hr class="mx-n3"/>
                      <div class="row align-items-center pt-4 pb-3">
                        <div class="col-md-3 pe-5">
                          <button type="submit" class="btn btn-success btn-lg" disabled={!isSecondButtonEnabled} onClick={save}>Add Course</button>
                        </div>
                        <div class="col-md-3 pe-5">
                        &nbsp;
                          <button type="submit" class="btn btn-warning btn-lg" disabled={!isThirdButtonEnabled} onClick={updateDataById}>Edit Course</button>
                        </div>
                      </div>
                  
                </div>
              </div>
      
            </div>
          </div>
        </div>
      </section>
   
    )
}

export default NewCourse;
function success(){
  toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
}
function info(){
  toast.info('Desk Already Exist...',{position: toast.POSITION.TOP_CENTER});
}
function warning(){
  toast.warning('Desk does not exist...',{position: toast.POSITION.TOP_CENTER})
}
function fail(){
  toast.error('Desk registration failed...',{position: toast.POSITION.TOP_CENTER})
}