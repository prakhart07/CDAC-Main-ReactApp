import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { url } from "../URL";
import "./css/student_registration.css"
import axios from 'axios';
import { useState } from "react"; 

function StudentRegForm(){
  
  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isThirdButtonEnabled, setIsThirdButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);

  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDOB] = useState();
  const [fatherName, setFatherName] = useState();
  const [motherName, setMotherName] = useState();
  const [state1, setState1] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [categorytype, setCategorytype] = useState();
  const [contact, setContact] = useState();
  const [religion, setReligion] = useState();
  const [uid, setUid] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [country, setCountry] = useState();
  const [zipCode, setZipCode] = useState();

  

  const studentData = {
    uid:uid,
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        fatherName:fatherName,
        motherName:motherName,
        email:email,
        password:password,
        gender:gender,
        categorytype:categorytype,
        religion:religion,
        address:address,
        city:city,
        state:state1,
        country:country,
        zipCode:zipCode,
        dob:dob,
        contact:contact      
   }

   async function updateDataById(event){
    //event.preventDefault();
    console.log("send",event);
    console.log("pre",event.motherName)
    
    try {
       const response= await axios.post(`${url.serverUrl}/student/${uid}`,{
          uid:uid,
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        fatherName:fatherName,
        motherName:motherName,
        email:email,
        password:password,
        gender:gender,
        categorytype:categorytype,
        religion:religion,
        address:address,
        city:city,
        state:state1,
        country:country,
        zipCode:zipCode,
        dob:dob,
        contact:contact 
        
    });
    console.log("post",response.motherName)
    console.log(response);
    alert("Desk registration sccessful")

    } catch (error) {
      alert("Desk registration failed")
    }
  }
  


  const save = async(event)=>{
    event.preventDefault();
    try {
        await fetch(`${url.serverUrl}/student`,{
          method : 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(studentData)
          
    });
    alert("Student Personal registration sccessful")
    success();

    } catch (error) {
      alert("Student Personal registration failed")
      fail();
    }
  }





  
  async function fetchDataById(event) {
    event.preventDefault();
   // disableInput();
    console.log("in func fetchdata");
    try {
      const response = await axios.get(`${url.serverUrl}/student/${uid}`);
      console.log('Response:',response.data);

      const fetchedfirstName= response.data.firstName;
      const fetchedmiddleName = response.data.middleName;
      const fetchedlastName = response.data.lastName;
      const fetchedfatherName= response.data.fatherName;
      const fetchedmotherName = response.data.motherName;
      const fetchedemail = response.data.email;
      const fetchedpassword = response.data.password;
      const fetchedgender = response.data.gender;
      const fetchedcategorytype= response.data.categorytype;
      const fetchedreligion = response.data.religion;
      const fetchedcity = response.data.city;
      const fetchedstate = response.data.state;
      const fetchedcountry = response.data.country;
      const fetchedzipCode = response.data.zipCode;
      const fetcheddob = response.data.dob;
      const fetchedcontact = response.data.contact;
      const fetchedaddress = response.data.address;
      console.log('Response data:',response.data.contact);

      document.getElementById('firstname').value = fetchedfirstName;
      document.getElementById('middlename').value = fetchedmiddleName;
      document.getElementById('lastname').value = fetchedlastName;
      document.getElementById('fathername').value = fetchedfatherName;
      document.getElementById('mothername').value = fetchedmotherName;
      document.getElementById('passwords').value = fetchedpassword;
      document.getElementById('gender').value = fetchedgender;
      document.getElementById('categorytype').value = fetchedcategorytype;
      document.getElementById('religion').value = fetchedreligion;
      document.getElementById('cityid').value = fetchedcity;
      document.getElementById('emails').value = fetchedemail;
      document.getElementById('state1').value = fetchedstate;
      document.getElementById('countryid').value = fetchedcountry;
      document.getElementById('zipcodes').value = fetchedzipCode;
      document.getElementById('dateob').value = fetcheddob;
      document.getElementById('contacts').value = fetchedcontact;
      document.getElementById('address').value = fetchedaddress;
      alert("Student found")
      console.log('Response:', response.data);
      if(response.data.pos!=null){
        info();
        setIsThirdButtonEnabled(true);
        
        setIsTagEnabled(true);
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


  // function updateDataById(id, updatedData) {
  //   //updatedData.preventDefault();
  //   console.log("in func updateDataById");
  //   try {
  //     const response =axios.put(`${url.serverUrl}/student/${id}`, updatedData);
  //     console.log('Response:', response.data);
  
  //     alert("Student updated successfully")
  
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert("Student updation failed")
  //   }
  // }
  // //const idToUpdate = 123; // Replace with the actual ID
  // const updatedData = {
  //   //deskId:id,
  //       firstName:firstName,
  //       middleName:middleName,
  //       lastName:lastName,
  //       fatherName:fatherName,
  //       motherName:motherName,
  //       email:email,
  //       password:password,
  //       gender:gender,
  //       categorytype:categorytype,
  //       religion:religion,
  //       address:address,
  //       city:city,
  //       state:state1,
  //       country:country,
  //       zipCode:zipCode,
  //       dob:dob,
  //       contact:contact   
  // };
  





    return(
      
        
        <div className="container" >
          
            <div className="py-5 text-center">
              
              <h2>Student Registration form</h2>
              <p className="lead"></p>
            </div>
          
            <div className="row">
              
              <div className="col-md-12 order-md-3">
                <h4 className="mb-3"></h4>
                

                  <div className="row">
                  <div className="col-md-12 mb-3">
                  <div className="col-md-3 mb-3"></div>
                      <div className="col-md-3 mb-3">
                        <label for="registrationdate">Aadhar Card*</label>
                          <input type="number" className="" id="aadharcard" placeholder="" disabled={isTagEnabled} value={uid}
                          onChange={(event) => setUid(event.target.value)}required/>
                      </div>
                        <div className="col-md-2 mb-3">
                          <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit" disabled={isFirstButtonEnabled} onClick={fetchDataById}>Get Data</button>
                        </div>
                    </div> 
                            
                    <hr className="mb-4"/>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="firstName">First name*</label>
                      <input type="text" className="form-control" id="firstname" placeholder="" value={firstName}
                      onChange={(event)=>{
                        setFirstName(event.target.value);
                      }}
                      required/>
                      
                      {/* <div className="invalid-feedback">
                        Valid first name is required.
                      </div> */}
                    </div>
                      <div className="col-md-4 mb-3">
                        <label for="firstName">Middle name*</label>
                        <input type="text" className="form-control" id="middlename" placeholder="" value={middleName}
                      onChange={(event)=>{
                        setMiddleName(event.target.value);
                      }} required/>
                        {/* <div className="invalid-feedback">
                          Valid first name is required.
                        </div> */}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="lastName">Last name*</label>
                      <input type="text" className="form-control" id="lastname" placeholder="" value={lastName}
          onChange={(event) => setLastName(event.target.value)}required/>
                      {/* <div className="invalid-feedback">
                        Valid last name is required.
                      </div> */}
                    </div>
                  </div>
                  <hr className="mb-4"/>
                  <div Style="align-content: center;">
                    <form className="needs-validation" novalidate>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label for="dateofbirth">Date of Birth*</label>
                          <input type="date" className="form-control" id="dateob" placeholder=""  value={dob}
          onChange={(event) => setDOB(event.target.value)} required/>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="Blood Group">Age</label>
                            <input type="number" className="form-control" id="age" placeholder=""  readonly/>
                            {/* <div className="invalid-feedback">
                              Valid name is required.
                            </div> */}
                    </div>
    
                    <div className="col-md-3 mb-3">
                            <label for="Gender">Gender</label><br></br>
                      <select className="custom-select d-block w-75" id="gender" value={gender}
          onChange={(event) => setGender(event.target.value)} required>
                        <option value="">Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      {/* <div className="invalid-feedback">
                        Please select a valid Gender.
                      </div>     */}
                        </div>
                        {/* <div className="col-md-3 mb-3"> */}
                            {/* <label for="Blood Group">Blood Group</label> */}
                            {/* <input type="text" className="form-control" id="bloodgroup" placeholder="" /> */}
                            {/* <div className="invalid-feedback">
                              Valid name is required.
                            </div> */}
                    {/* </div> */}
                    </div>
                    </form>
                </div>
                </div>   
    
                <hr className="mb-4"/>
    
                  <div Style="align-content: center;">
                    <form className="needs-validation" novalidate>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label for="firstName">Father's Name*</label>
                          <input type="text" className="form-control" id="fathername" placeholder=""  value={fatherName}
          onChange={(event) => setFatherName(event.target.value)} required/>
                          {/* <div className="invalid-feedback">
                            Valid name is required.
                          </div> */}
                        </div>
                          <div className="col-md-6 mb-3">
                            <label for="firstName">Mother's Name*</label>
                            <input type="text" className="form-control" id="mothername" placeholder=""  value={motherName}
          onChange={(event) => setMotherName(event.target.value)} required/>
                            {/* <div className="invalid-feedback">
                              Valid name is required.
                            </div> */}
                        </div>
                    </div>
                    </form>
                </div>
                      
          
                  
          
                 
          
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="country">Country*</label><br></br>
                      <select className="custom-select d-block w-100" id="countryid" value={country}
                      onChange={(event) => setCountry(event.target.value)}required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      {/* <div className="invalid-feedback">
                        Please select a valid country.
                      </div> */}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state1">State*</label><br></br>
                      <select className="custom-select d-block w-100" id="state1" value={state1}
                      onChange={(event) => setState1(event.target.value)}required>
                        <option value="">Choose...</option>
                        <option>Maharashtra</option>
                        <option>Madhya Pradesh</option>
                        <option>Delhi</option>
                      </select>
                      {/* <div className="invalid-feedback">
                        Please provide a valid state.
                      </div> */}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="city">City*</label><br></br>
                        <input type="text" className="form-control" id="cityid" placeholder="" value={city}
          onChange={(event) => setCity(event.target.value)}required/>
                        {/* <div className="invalid-feedback">
                          Please provide a valid district.
                        </div> */}
                      </div>
                    
                  </div>
                  <div className="mb-3">
                    <label for="address">Permanent Address*</label>
                    <input type="text" className="form-control" id="address" placeholder="" value={address}
          onChange={(event) => setAddress(event.target.value)}required/>
                    {/* <div className="invalid-feedback">
                      Please enter your valid Permanent address.
                    </div> */}
                  </div>
          
                  <div className="mb-3">
                    <label for="address2">Correspondance Address*<span className="text-muted"></span></label>
                    <input type="text" className="form-control" id="address2" placeholder="" required/>
                  </div>
                  <div className="mb-3">
                    <label for="zipcode">Zip-Code*<span className="text-muted"></span></label>
                    <input type="text" className="form-control" id="zipcodes" placeholder="" value={zipCode}
          onChange={(event) => setZipCode(event.target.value)}required/>
                  </div>
    
                  
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="email">Email*<span className="text-muted"></span></label>
                        <input type="email" className="form-control" id="emails" placeholder="you@example.com" value={email}
          onChange={(event) => setEmail(event.target.value)}/>
                        {/* <div className="invalid-feedback">
                          Please enter a valid email.
                        </div> */}
                    </div>
                    <div className="col-md-6 mb-3">
                          <label for="password">Password*</label>
                          <input type="text" className="form-control" id="passwords" placeholder="" value={password}
                          onChange={(event) => setPassword(event.target.value)}required/>
                          {/* <div className="invalid-feedback">
                            Contact number is required.
                          </div> */}
                        </div>
                        <div className="col-md-3 mb-3">
                          <label for="Contact">Contact*</label>
                          <input type="text" className="form-control" id="contacts" placeholder="" value={contact}
                          onChange={(event) => setContact(event.target.value)}required/>
                          {/* <div className="invalid-feedback">
                            Contact number is required.
                          </div> */}
                        </div>
                        
                        <div className="col-md-4 mb-3">
                      <label for="country">Religion*</label><br></br>
                      <select className="custom-select d-block w-100" id="religion" value={religion}
                        onChange={(event) => setReligion(event.target.value)}required>
                        <option value="">Choose...</option>
                        <option>Hindu</option>
                        <option>Muslim</option>
                        <option>Chritian</option>
                        <option>Sikh</option>
                        <option>Other Minorities</option>
                      </select>
                      {/* <div className="invalid-feedback">
                        Please select a valid religion.
                      </div> */}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">Category*</label><br></br>
                      <select className="custom-select d-block w-100" id="categorytype" value={categorytype}
          onChange={(event) => setCategorytype(event.target.value)}required>
                        <option value="">Choose...</option>
                        <option value="1">General</option>
                        <option value="2">OBC</option>
                        <option value="3">SC</option>
                        <option value="4">ST</option>
                      </select>
                      {/* <div className="invalid-feedback">
                        Please provide a valid state.
                      </div> */}
                    </div>

                  </div>
                  
                  </div>
    
    
                  <div className="row">
                    
                    
                    {/* <div className="col-md-4 mb-3">
                        <label for="state">Mother tounge*</label>
                        <select className="custom-select d-block w-100" id="mothertounge" required>
                          <option value="">Choose...</option>
                          <option>Hindi</option>
                          <option>Mararthi</option>
                          <option>Gujrati</option>
                          <option>Punjabi</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid district.
                        </div>
                      </div> */}
                  </div>
    
    
                  {/* <hr className="mb-4"/> */}
                  
                  <hr className="mb-4"/>
          
                 
          
                  {/* <div className="d-block my-3">
                   
                    
                  </div> */}
                  
                  <div className="row" Style="justify-content: center;">
                        <center>
                        
                        </center>
                     
                     
                </div>
                  
                   
                    
                    <div className="row" Style="justify-content: center;">
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit" disabled={isSecondButtonEnabled} onClick={save}>Rregister</button>
                        </div>
                        <div className="col-md-4 mb-3">
                        </div>
                        
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit" disabled={isThirdButtonEnabled} onClick={updateDataById}>Update</button>
                        </div>
                      
                    </div>
                    <br></br>
                     
                     
                    <div>
                  </div>
                  
              </div>
             
    );
}

export default StudentRegForm;
function success(){
  toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
}
function info(){
  toast.info('Student Already Exist...',{position: toast.POSITION.TOP_CENTER});
}
function warning(){
  toast.warning('Student does not exist...',{position: toast.POSITION.TOP_CENTER})
}
function fail(){
  toast.error('student registration failed...',{position: toast.POSITION.TOP_CENTER})
}

