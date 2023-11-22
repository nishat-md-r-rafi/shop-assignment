import { Link } from 'react-router-dom'
import './navbar.css'
import { MdOutlineAccountCircle } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'


export  const Navbar = () => {

  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth)
  const logOut = () => { 
    console.log("logout")
  }
  console.log(userInfo)
  return (
    <div className='navContainer'>
        <div>logo</div>
        <div className='userInfo'>
            {userInfo.user ? <>
              <Link onClick={logOut}>logout</Link>
                <Link to='/user'>
                  users
                </Link>
              <Link to="/item">items</Link>
              <MdOutlineAccountCircle />
              </> :

              <Link to="/login">login</Link>
            
            }
            
        </div>
    </div>
  )
}
