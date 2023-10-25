import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import { url } from "./URL";

function DisplayDataForm() {
    
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [course, setCourse] = useState();
  const [medium, setMedium] = useState();
  const [passingyear, setPassingYear] = useState();
  const [percentage, setPercentage] = useState();
  const [uid, setUid] = useState();
  
  async function fetchPerDataById(event) {
    event.preventDefault();
   // disableInput();
    console.log("in func fetchdata");
    try {
     // const response = await axios.get(`${url.serverUrl}/student/${uid}`);
      const response=await axios.get(`${url.serverUrl}/academic/${uid}`);
      //const coresponse=await axios.get(`http://192.168.125.185:8080/academic/${uid}`);

      console.log('Response:',response.data.studentPersonalInfo);
      console.log('academic Response:',response);

      const fetchedfirstName= response.data.studentPersonalInfo.firstName;
      const fetchedmiddleName = response.data.studentPersonalInfo.middleName;
      const fetchedlastName = response.data.studentPersonalInfo.lastName;
      const fetchedname=response.data.instituteid.id;
      const fetchedcourse=response.data.course;
      const fetchedpassingyear=response.data.passingyear;
      const fetchedmedium=response.data.medium;
      const fetchedcity=response.data.studentPersonalInfo.city;
      const fetchedpercentage=response.data.percentage;
      

      //const fetchedcategorytype= response.data.categorytype;
      // const fetchedfatherName= response.data.fatherName;
      // const fetchedmotherName = response.data.motherName;
      // const fetchedemail = response.data.email;
      // const fetchedpassword = response.data.password;
      // const fetchedgender = response.data.gender;
      // const fetchedreligion = response.data.religion;
      // const fetchedcity = response.data.city;
      // const fetchedstate = response.data.state;
      // const fetchedcountry = response.data.country;
      // const fetchedzipCode = response.data.zipCode;
      // const fetcheddob = response.data.dob;
      // const fetchedcontact = response.data.contact;
      // const fetchedaddress = response.data.address;

      console.log('Response data:',response.data.contact);


      setFirstName(fetchedfirstName);
      setMiddleName(fetchedmiddleName);
      setLastName(fetchedlastName);
      setName(fetchedname);
      setCity(fetchedcity);
      setCourse(fetchedcourse);
      setMedium(fetchedmedium);
      setPassingYear(fetchedpassingyear);
      setPercentage(fetchedpercentage);

     // document.getElementById('categorytype').value = fetchedcategorytype;
      // document.getElementById('fathername').value = fetchedfatherName;
      // document.getElementById('mothername').value = fetchedmotherName;
      // document.getElementById('passwords').value = fetchedpassword;
      // document.getElementById('gender').value = fetchedgender;
      // document.getElementById('religion').value = fetchedreligion;
      // document.getElementById('cityid').value = fetchedcity;
      // document.getElementById('emails').value = fetchedemail;
      // document.getElementById('state1').value = fetchedstate;
      // document.getElementById('countryid').value = fetchedcountry;
      // document.getElementById('zipcodes').value = fetchedzipCode;
      // document.getElementById('dateob').value = fetcheddob;
      // document.getElementById('contacts').value = fetchedcontact;
      // document.getElementById('address').value = fetchedaddress;
      alert("Student found")
      //console.log('Response:', response.data);
      
    } catch (error) {
      alert("Student not found")
      console.error('Error:', error);
    }
  }
  
  
  
  return(

    <div>
  <title>Display Data</title>
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <center>
    <div className="table table-responsive">
      <h1>Data</h1><table className="table table-bordered" Style={{width: '600px', height: '100%', marginTop: '100px'}}>
        <tbody><tr>
          </tr>
          <tr>
            <td>Enter Unique ID</td>
            <td>
              <input type="text" id="unique no" size="30px" placeholder="Enter ID here" value={uid}
          onChange={(event) => setUid(event.target.value)}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="submit" className="btn btn-primary btn-lg" onClick={fetchPerDataById}>Validate</button>
            </td>
          </tr>
        </tbody></table>
      <table className="table table-striped" border={1} Style={{width: '550px', height: '100%', marginTop: '100px',}}>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Institute</th>
            <th scope="col">Course</th>
            <th scope="col">Medium</th>
            <th scope="col">Passing Year</th>
            <th scope="col">Place</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td scope="row"><h6 id="firstname"></h6>{firstName}</td>
            <td id="middlename"scope="row"><h6></h6>{middleName}</td>
            <td id="lastname"scope="row"><h6>{lastName}</h6></td>
            <td id="institute"scope="row"><h6>{name}</h6></td>
            <td id="course"scope="row"><h6>{course}</h6></td>
            <td id="medium"scope="row"><h6>{medium}</h6></td>
            <td id="passingyear"scope="row"><h6>{passingyear}</h6></td>
            <td id="place"scope="row"><h6>{city}</h6></td>
            <td id="percentage"scope="row"><h6>{percentage}</h6></td>
            
          </tr>
        </tbody>
      </table>
      <button type="submit" className="btn btn-primary btn-lg">Update</button>
    </div>
  </center>
</div>
    )
}
export default DisplayDataForm;