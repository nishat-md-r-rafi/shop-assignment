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

            // sign-up
            <div className="form-container sign-up">
                <form onSubmit={handleSignUp}>
                    <h1>Create Account</h1>
                    <input 
                        type="text" 
                        placeholder="Name between 3-16 without special character!"
                        name="name"
                        pattern= "^[A-Za-z0-9]{3,16}$"
                        required
                        />
                    <input type="email" placeholder="Email" required/>
                    <input 
                        type="password" 
                        placeholder="Password between 4-20, 1 letter, 1 number, 1 special character!" 
                        pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$"
                        required/>
                    <button>Sign Up</button>
                </form>
            </div>

            // sign-in
            <div className="form-container sign-in">
                <form onSubmit={handleSignIn}>
                    <h1>Sign In</h1>
                    <input 
                        type="text" 
                        placeholder="Name between 3-16 without special character!"
                        name="name"
                        pattern= "^[A-Za-z0-9]{3,16}$"
                        required
                        />
                    <input 
                        type="password" 
                        placeholder="Password between 4-20,1 letter, 1 number,1 special character!" 
                        pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$"
                        required
                    />
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
