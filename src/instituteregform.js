import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
//import { useEffect, useState } from "react"; 
import { useState } from "react";
import { url } from "./URL";


function InstituteRegForm(){



  const [isFirstButtonEnabled, setIsFirstButtonEnabled] = useState(false);
  const [isSecondButtonEnabled, setIsSecondButtonEnabled] = useState(false);
  const [isThirdButtonEnabled, setIsThirdButtonEnabled] = useState(false);
  const [isTagEnabled, setIsTagEnabled] = useState(false);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state1, setState1] = useState();
  const [pincode, setPincode] = useState();
  const [university, setUniversity] = useState();
  const [status, setStatus] = useState();
  const [id, setId] = useState();
  //const [data, setData] = useState("");
  //var Maharashtra = ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
  
   
  
  async function fetchDataById(event) {
    event.preventDefault();
    console.log("in func fetchdata");
    try {
      const response = await axios.get(`${url.serverUrl}/institute/${id}`);
      console.log('Response:', response.data);

      const fetchedid = response.data.id;
      const fetchedaddress = response.data.address;
      const fetchedcity = response.data.city;
      const fetchedname = response.data.name;
      const fetchedpincode = response.data.pincode;
      const fetchedstate = response.data.state;
      const fetchedstatus = response.data.status;
      const fetcheduniversity = response.data.university;

      document.getElementById('instituteid').value = fetchedid;
      document.getElementById('address').value = fetchedaddress;
      document.getElementById('city').value = fetchedcity;
      document.getElementById('firstName').value = fetchedname;
      document.getElementById('pincode').value = fetchedpincode;
      document.getElementById('inputState').value = fetchedstate;
      document.getElementById('status').value = fetchedstatus;
      document.getElementById('university').value = fetcheduniversity;
      //document.getElementById('state').value = fetchedstate;

      console.log('Response:', response.data.city);
      
      
      if(response.data.name!=null){
        //info();
        setIsThirdButtonEnabled(true);
        setIsTagEnabled(true);
        
        //setIsTagEnabled(true);
      }
      else{
        ///warning();
        setIsSecondButtonEnabled(true);
        
      }
      
    } catch (error) {
      //alert("Desk not found")
      
      
      console.error('Error:', error);
    }
  }



  async function updateDataById(event){
    event.preventDefault();
    console.log(event);
    try {
        const response=await axios.post(`${url.serverUrl}/institute/${id}`,{
        id:id,
        address:address,
        city:city,
        name:name,
        pincode:pincode,
        state:state1,
        status:status,
        university:university
        
        
    });
    console.log('Response:', response.data);
    alert("Institute registration sccessful")

    } catch (error) {
      alert("Institute registration failed")
    }
  }







  async function save(event){
    event.preventDefault();
    try {
        await axios.post(`${url.serverUrl}/institute`,{
        id:id,
        address:address,
        city:city,
        name:name,
        pincode:pincode,
        state:state1,
        status:status,
        university:university
        
        
    });
    alert("Institute registration sccessful")

    } catch (error) {
      alert("Institute registration failed")
    }
  }

  

  // const fetchInfo = ()=>{
  //   return axios.get(url).then((response)=>response.json()).then((data)=>setData(data));
  // }
  // useEffect(()=>{
  //   fetchInfo();
  // },[])

  

    return(
    
        <div className="container" >
          
            <div className="py-5 text-center">
              
              <h2>Institute Registration form</h2>
              <p className="lead"></p>
            </div>
          
            <div className="row">
              
            


              <div className="col-md-12 order-md-3">
                <h4 className="mb-3"></h4>

                <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="name">Institute Id*</label>
                      <input type="number" className="form-control" id="instituteid" placeholder="" value={id}
                      onChange={(event)=>{
                        setId(event.target.value);
                      }} disabled={isTagEnabled}required/>
                    </div>
                    <br></br> 
                    <div class="px-5 py-4">
                      <button type="submit" class="btn btn-primary btn-lg" disabled={isFirstButtonEnabled} onClick={fetchDataById}>Get Institute</button>
                      </div> 
                </div> 

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label for="name">InstituteName*</label>
                      <input type="text" className="form-control" id="firstName" placeholder="" value={name}
                      onChange={(event)=>{
                        setName(event.target.value);
                      }}required/>
                    
                </div>  
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3">
                    <label for="university">University*</label>
                        <input type="text" className="form-control" id="university" placeholder="" value={university}
          onChange={(event) => setUniversity(event.target.value)}required/>
                    
                </div>  
                </div> 
                      <br></br>
                <div className="row">
                    <div className="col-md-4 mb-3">
                    <label for="state1">State*</label>
                    {/*  */}
                      <select class="form-control" id="inputState" value={state1}
          onChange={(event) => setState1(event.target.value)}required>
                        <option value="SelectState">Select State</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Madya Pradesh">Madya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                      </select>
                    
                </div>  
                </div>
                <br></br>

                <div className="row">
                    <div className="col-md-4 mb-3">
                    <label for="city">City*</label>
                        <input type="text" className="form-control" id="city" placeholder="" value={city}
          onChange={(event) => setCity(event.target.value)}required/>
                    
                </div>  
                </div>
                
                <div className="mb-3">
                {/* <h4 className="mb-3"></h4> */}
                    <label for="address">Permanent Address*</label>
                    <input type="text" className="form-control" id="address" placeholder="" value={address}
          onChange={(event) => setAddress(event.target.value)}required/>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-4 mb-3">
                    <label for="pincode">Pincode*</label>
                        <input type="text" className="form-control" id="pincode" placeholder="" value={pincode}
          onChange={(event) => setPincode(event.target.value)}required/>
                    
                </div>  
                </div>
                     
                
                  </div>
                  <br></br>
                    {/* <h4 className="mb-3"></h4> */}
                    <br></br>
                    <div className="col-md-4 mb-3">
                        <label for="pincode">Status*</label>
                        <select type="text"  className="form-control" id="status" placeholder="" value={status}
          onChange={(event) => setStatus(event.target.value)}required>
                                  <option value={true}>TRUE</option>
                        <option value={false}>FALSE</option>
                        </select>
                      </div>
                  
                      {/* <h4 className="mb-3"></h4> */}
                    <hr className="mb-4"/>
                    <div className="row" Style="justify-content: center;">
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit" disabled={!isSecondButtonEnabled} onClick={save}>Register Institute</button>
                        </div>
                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary btn-lg btn-block" Style="align-content: center;" type="submit" disabled={!isThirdButtonEnabled} onClick={updateDataById}>Edit Institute</button>
                        </div>
                    </div>
                    
                    <div>
                  </div>
                  
              </div>
              </div>

              
             
    );
}

export default InstituteRegForm;
// function success(){
//   toast.success('Welcome...',{position: toast.POSITION.TOP_RIGHT});
// }
// function info(){
//   toast.info('Student Already Exist...',{position: toast.POSITION.TOP_CENTER});
// }
// function warning(){
//   toast.warning('Student does not exist...',{position: toast.POSITION.TOP_CENTER})
// }
// function fail(){
//   toast.error('student registration failed...',{position: toast.POSITION.TOP_CENTER})
// }