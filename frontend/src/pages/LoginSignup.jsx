import './CSS/LoginSignup.css'
export default function LoginSignup(){
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text"  placeholder="E-mail"/>
                    <input type="text"  placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsingnup-login">Already have an account? <span>Login</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""  />
                    <p>By continuing , I agree to the terms and conditons</p>
                </div>
            </div>
        </div>
    );
}