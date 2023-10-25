import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import { url } from "./URL";

//institutestatus coursestatus percentage academicyear uid
//uid,instid,courseid,academicyear(long),percentage



function UploadDataForm() {

  const [coursename, setCourseName] = useState();
  const [instituteid, setInstituteId] = useState();
  const [courseid, setCourseId] = useState();
  const [academicyear, setAcademicYear] = useState();
  const [percentage, setPercentage] = useState();


  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isThirdButtonEnabled, setIsThirdButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);
  


  async function updateDataById(event){
    console.log("updateDataById",event);
    event.preventDefault();
    //console.log("updateDataById",medium);
    try {
        await axios.post(`${url.serverUrl}/course/${courseid}`,{
          // courseId:courseid,
          // courseName:coursename,
          // medium:medium,
          // durationYear:durationyear
           
    });
    alert("Course updation sccessful")
    //success();

    } catch (error) {
      alert("Course updation failed")
      //fail();
    }
  }








    return(

<div>
    <title>Upload Data</title>
  
    <link rel="stylesheet" href="css/bootstrap.min.css" />
  <center>
    <div className="table table-responsive">
      <h1>Upload Data</h1><table className="table table-bordered" Style={{width: '600px', height: '100%', marginTop: '100px'}}>
        <tbody><tr>
          </tr>
          <tr>
            <td>Enter Unique ID</td>
            <td>
              <input type="number" id="unique no" size="30px" placeholder="Enter ID here" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" className="btn btn-primary btn-lg">Validate</button>
            </td>
          </tr>
        </tbody></table>
        
      {/* <button type="submit" className="btn btn-primary btn-lg">Update</button> */}
    </div>
    <div class="col-md-9">
      <div class="card" Style="border-radius: 15px;">
                <div class="card-body">
                  <div class="row align-items-center pt-4 pb-3">
                      <div class="col-md-3 ps-5">
                      <h5 class="mb-0">Institute ID</h5>
      
                       </div>
                    <div class="col-md-6 pe-5">
      
                      <input type="number" size="50px" id="instituteid" placeholder="Enter Course name" value={instituteid}
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
      
                      <h5 class="mb-0">Course ID</h5>
      
                    </div>
                    <div class="col-md-6 pe-5">
      
                      <input type="number" size="50px" id="courseid" placeholder="Enter Course name" value={courseid}
                      onChange={(event)=>{
                        setCourseId(event.target.value);
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
                    <div class="col-md-6 pe-5">
      
                      <input type="number" size="50px" id="academicyear" placeholder="Enter Course name" value={academicyear}
                      onChange={(event)=>{
                        setAcademicYear(event.target.value);
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
                    <div class="col-md-6 pe-5">
      
                      <input type="number" size="50px" id="percentage" placeholder="Enter Course name" value={percentage}
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
      
                      <h5 class="mb-0">Course Name</h5>
      
                    </div>
                    <div class="col-md-6 pe-5">
      
                      <input type="text" size="50px" id="coursename" placeholder="Enter Course name" value={coursename}
                      onChange={(event)=>{
                        setCourseName(event.target.value);
                      }}
                       />

                      <br/>
      
                    </div>
                  </div>
                  
                </div>
                <hr class="mx-n3"/>
                      <div class="row align-items-center pt-4 pb-3">
                        {/* <div class="col-md-3 pe-5">
                          <button type="submit" class="btn btn-success btn-lg" disabled={!isSecondButtonEnabled} onClick={save}>Add Course</button>
                        </div> */}
                        <div class="col-md-3 pe-5">
                          <button type="submit" class="btn btn-success btn-lg" disabled={!isThirdButtonEnabled} onClick={updateDataById}>Upload Data</button>
                        </div>
                      </div>
        </div>             
     </div>
  </center>
</div>
    )
}
export default UploadDataForm;



{/* <section class="vh-100" Style="background-color:white;">
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
      
                          <input type="number" size="50px" id="courseid" placeholder="Enter Course Id" disabled={isTagEnabled}value={courseid}
                          onChange={(event)=>{
                          setCourseId(event.target.value);
                         }}
                        />
                       <div class="px-5 py-4">
                        <button type="submit" class="btn btn-primary btn-lg" disabled={isFirstButtonEnabled} onClick={fetchDataById}>Get Course</button>
                      </div>

                      <br/> 
      
                    </div>
                  </div>

                  {/* <div class="px-5 py-4">
                    <button type="submit" class="btn btn-primary btn-lg">Add Student</button>
                  </div> */}
      
        //           <hr class="mx-n3"/>
      
        //           <div class="row align-items-center pt-4 pb-3">
        //             <div class="col-md-3 ps-5">
      
        //               <h5 class="mb-0">Course Name</h5>
      
        //             </div>
        //             <div class="col-md-9 pe-5">
      
        //               <input type="text" size="50px" id="cousrename" placeholder="Enter Course Status" value={coursename}
        //               onChange={(event)=>{
        //                 setCourseName(event.target.value);
        //               }}
        //                />

        //               <br/>
      
        //             </div>
        //           </div>
      
        //           <hr class="mx-n3"/>
      
        //           <div class="row align-items-center pt-4 pb-3">
        //             <div class="col-md-3 ps-5">
      
        //               <h5 class="mb-0">Medium</h5>
      
        //             </div>
        //             <div class="col-md-9 pe-5">
      
        //               <input type="text" size="50px" id="medium" placeholder="Enter percentage" value={medium}
        //               onChange={(event)=>{
        //                 setMedium(event.target.value);
        //               }}
        //                />
        //                <br/>

        //             </div>
        //           </div>
        //           <hr class="mx-n3"/>
        //           <div class="row align-items-center pt-4 pb-3">
        //             <div class="col-md-3 ps-5">
      
        //               <h5 class="mb-0">Duration Year</h5>
      
        //             </div>
        //             <div class="col-md-9 pe-5">
      
        //               <input type="number" size="50px" id="durationyear" placeholder="" value={durationyear}
        //               onChange={(event)=>{
        //                 setDurationyear(event.target.value);
        //               }}
        //                />
        //                <br/>

        //             </div>
        //           </div>
        //           <hr class="mx-n3"/>
        //               <div class="row align-items-center pt-4 pb-3">
        //                 <div class="col-md-3 pe-5">
        //                   <button type="submit" class="btn btn-primary btn-lg" disabled={!isSecondButtonEnabled} onClick={save}>Add Course</button>
        //                 </div>
        //                 <div class="col-md-3 pe-5">
        //                 &nbsp;
        //                   <button type="submit" class="btn btn-primary btn-lg" disabled={!isThirdButtonEnabled} onClick={fetchDataById}>Edit Course</button>
        //                 </div>
        //               </div>
                  
        //         </div>
        //       </div>
      
        //     </div>
        //   </div>
        // </div>
      //</section> */}