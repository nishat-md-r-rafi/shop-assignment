import { Link } from 'react-router-dom'
import './navbar.css'
import { MdOutlineAccountCircle } from "react-icons/md"


export  const Navbar = () => {
  return (
    <div className='navContainer'>
        <div>logo</div>
        <div className='userInfo'>
            <Link>Register</Link>
            <Link to="/login">login</Link>
            <Link to='/user'>
              users
            </Link>
            <Link to="/item">item</Link>
            <MdOutlineAccountCircle />
        </div>
    </div>
  )
}
