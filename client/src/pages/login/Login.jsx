import { useState } from 'react'
import './login.css'

export const Login = () => {
    const [isActive, setisActive] = useState(false)

    const handleSignIn = (e) => {  
        e.preventDefault()
    }
    const handleSignUp = (e) => {  
        e.preventDefault()
    }
    
  return (
    <div className='login'>
        <div className={isActive?'container active': 'container'} id='container'>
            <div className="form-container sign-up">
                <form onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a >Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>

            <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left" onClick={() => setisActive(false)}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right" onClick={() => setisActive(true)}>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
