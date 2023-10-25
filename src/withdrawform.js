import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
//import { useEffect, useState } from "react"; 
import { useState } from "react";
import { url } from "./URL";





function WithdrawForm(){

  const [uid, setUid] = useState();
  const [id, setId] = useState();
  const [courseid, setCourseId] = useState();
  const [academicyear, setAcademicYear] = useState();
  


  async function fetchDataById(event) {
    event.preventDefault();
    try {
      const response = await axios.get(`${url.serverUrl}/academic/${uid}/${academicyear}`);
      console.log('Response:', response);
      // console.log('Response:', response.data.courseId);
      // console.log('Response:', response.data.courseName);
      // console.log('Response:', response.data.medium);
      // console.log('Response:', response.data.durationYear);

      // const fetchedcousreid = response.data.courseId;
      // const fetchedcoursename = response.data.courseName;
      // const fetchedmedium = response.data.medium;
      // const fetcheddurationyear = response.data.durationYear;

      // document.getElementById('courseid').value = fetchedcousreid;
      // document.getElementById('coursename').value = fetchedcoursename;
      // document.getElementById('medium').value = fetchedmedium;
      // document.getElementById('durationyear').value = fetcheddurationyear;
      
      // console.log('Response:', response.data.courseName);
      // console.log('Response:', response.data.course_name);

      if(response.data.courseId!=null){
        //info();
        //setIsThirdButtonEnabled(true);
        
        //setIsTagEnabled(true);
      }
      else{
        //warning();
        //setIsSecondButtonEnabled(true);
        
      }
    } catch (error) {
      alert("student not found...")
     // warning();
       // setIsSecondButtonEnabled(true);
      console.error('Error:', error);
    }
  }
  
    
    return(
        <div>
  <title>Withdraw Student</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <center>
    <div className="table table-responsive">
      <h1>Withdraw Student</h1><table className="table table-bordered" style={{width: '600px', height: '100%', marginTop: '100px'}}>
        <tbody><tr>
          </tr>
          <tr>
            <td>Enter Unique ID</td>
            <td>
              <input type="number" id="uid" size="30px" placeholder="Enter UID here" value={uid}
                      onChange={(event)=>{
                        setUid(event.target.value);
                      }}/>
            </td>
          </tr>
          {/* <tr>
            <td>Institute ID</td>
            <td>
              <input type="number" id="instituteid" size="30px" placeholder="Enter Institute ID here" value={id}
                      onChange={(event)=>{
                        setId(event.target.value);
                      }}/>
            </td>
          </tr> */}
          {/* <tr>
            <td>Course ID</td>
            <td>
              <input type="number" id="courseid" size="30px" placeholder="Enter Course ID here" value={courseid}
                      onChange={(event)=>{
                        setCourseId(event.target.value);
                      }}/>
            </td>
          </tr> */}
          <tr>
            <td>Academic Year</td>
            <td>
              <input type="number" id="academicyaer" size="30px" placeholder="Enter Academic Year here" value={academicyear}
                      onChange={(event)=>{
                        setAcademicYear(event.target.value);
                      }}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" className="btn btn-primary btn-lg" onClick={fetchDataById}>Validate</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan={2} ><input type="submit" value= "Relieve" className="btn btn-warning" defaultValue="Relieve" /></td>
            
          </tr>
        </tbody></table>
    </div>
    {/* <table className="table table-bordered">
      <tbody><tr>
          <td>Student Status</td>
          <td>
            <input type="submit" value= "Relieve" className="btn btn-warning" defaultValue="Relieve" /> <span></span>
            <input type="submit" value= "Confirmation" className="btn btn-danger" defaultValue="Confirmation" />
          </td>
        </tr>
      </tbody></table> */}
  </center>
</div>
    )
}
export default WithdrawForm;