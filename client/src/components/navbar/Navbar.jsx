import { Link } from 'react-router-dom'
import './navbar.css'
import { MdOutlineAccountCircle } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedOut } from '../../features/auth/authSlice'


export  const Navbar = () => {

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth)
  const logOut = () => { 
    dispatch(userLoggedOut());
    localStorage.clear();
  }
  
  return (
    <div className='navContainer'>
        <div>logo</div>
        <div className='userInfo'>
            {userInfo.accessToken && <>
                              <Link onClick={logOut}>logout</Link>
                              <Link to='/user'>
                                users
                              </Link>
                              <Link to="/item">items</Link>
                              <MdOutlineAccountCircle />
                            </> 
            }
                          
            
        </div>
    </div>
  )
}
