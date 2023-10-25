import React from 'react'
import '../Navbar/Nav.css';
import { Link } from 'react-router-dom';


function navbar() {





  return (
    <div className='container-fluid'>
<div className='main'>

  <div className='logo'>
<Link to="/"><h2>ShikshBharat</h2></Link>
  </div>
    
  <div className='btn'>Admin</div>

  <div className='search'>
   <input></input>
  </div>
  
  <div className='btn'>

 <Link to="/signup"><button type="button" className="btn btn-primary">Signup</button></Link> 
 <Link to="/upload"><button type="button" className="btn btn-primary">Upload</button></Link> 
  
  </div>

</div>
    </div>
  )
}

export default navbar