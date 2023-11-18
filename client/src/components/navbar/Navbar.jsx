import './navbar.css'
import { MdOutlineAccountCircle } from "react-icons/md"

export  const Navbar = () => {
  return (
    <div className='navContainer'>
        <div>logo</div>
        <div className='userInfo'>
            <p>register</p>
            <p>login</p>
            <p>users</p>
            <p>item</p>
            <MdOutlineAccountCircle />
        </div>
    </div>
  )
}
