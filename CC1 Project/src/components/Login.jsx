import './Login.css'

function Login(){
    return (
        <div className="body">
        <div className='header'> 
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
    
            <h1>Login</h1>
    
            <div class="input-box">
              <input type="text" placeholder="Email"/>
            </div>
            
            <div class="input-box">
              <input type="password" placeholder="Password"/>
            </div>
    
            <div class="check-box">
              <span>
              <h5 class="p">Forget Password?</h5>
              </span>
            </div>
    
            <button type="submit" class="submit-btn">Submit</button>
    
            <a href="register.html" class="Register-btn">Dont have an account? Register</a>
    
          </form>
    
        </div>
    
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    
      </div>
    )
}

export default Login;