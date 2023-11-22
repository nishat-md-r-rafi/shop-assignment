import './login.css'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../../features/auth/authApi'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';

export const Login = () => {

    const [login, {isError:isLoginError, isLoginLoading, isLoginSuccess, loginError}] = useLoginMutation();
    const [register, {isSignUpLoading, isSignUpError, isSignUpSuccess, signUpError}] = useRegisterMutation();


    const [isActive, setisActive] = useState(false)
    const [value, setValue] = useState({});
    let navigate = useNavigate()

    const handleChange = (e) => {  
        setValue((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    let result = null;

    const handleSignIn = async (e) => {  
        e.preventDefault()
        result = await login(value)
        if ("error" in result){
            toast.error(result?.error?.data, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.success('Login successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            setTimeout(() => {
                navigate("/user")
            }, 1000);
        }
    }
    const handleSignUp = async (e) => {  
        e.preventDefault()
        result = await register({...value, created_by: "self"})
        console.log(result)

        if ("error" in result){
            toast.error(result?.error?.data?.message || "Name or Email already exists!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.success('SignUp Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            setTimeout(() => {
                navigate("/user")
            }, 1000);
        }

        // console.log(result.error.data.message)
        // e.target.reset();
    }

    console.log(value)

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
                        onChange={handleChange}
                        required
                        />
                    <input type="email" 
                        placeholder="Email"     
                        name="email" 
                        onChange={handleChange}
                        required/>
                    <input 
                        type="password" 
                        placeholder="Password between 4-20, 1 letter, 1 number, 1 special character!" 
                        pattern= "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$"
                        name="password"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        required
                        />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password between 4-20,1 letter, 1 number,1 special character!" 
                        onChange={handleChange}
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

        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

        </div>
    </div>
  )
}
