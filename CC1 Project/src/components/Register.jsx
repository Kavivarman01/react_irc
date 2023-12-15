import './Login.css';
function Register(){
    return (
        <div className="body">
       
    
   
        <div className="header">
          <h1>CustomeXperience</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Service</a>
          </nav>
        </div>
    
        <div class="Form-box">
          <form class="Login-form">
    
            <h1>Register</h1>
    
            <div class="input-box">
              <input type="text" placeholder="Username"></input>
            </div>
    
            <div class="input-box">
              <input type="text" placeholder="Email"></input>
            </div>
            
            <div class="input-box">
              <input type="password" placeholder="Password"></input>
            </div>
    
            <div class="check-box">
              <span>
              <input type="checkbox" id="login-checkbox"></input>
              <label for="login-checkbox">I agree to the terms & conditions</label>
              </span>
            </div>
            <button type="submit" class="submit-btn">Submit</button>
    
            <a href="myself.html" class="Register-btn">Register before? Login</a>
    
          </form>
    
        </div>
    
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
      </div>

    
    )
}

export default Register;