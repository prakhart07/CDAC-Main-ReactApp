function OTP(){
    return(
        <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 login-container">
            <center>
        <h3 className="mb-3">OTP</h3>
            </center>
        <form>
          <div className="form-group">
            <label for="OTP">Username:</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username"/>
          </div>
          
          <center>
          <button type="submit" className="btn btn-primary">submit</button>
          </center>
        </form>
      </div>
    </div>
  </div>
    );
}
export default OTP;