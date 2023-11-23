import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const PrivateRoute =  ({children}) => {
  
    const userInfo = useSelector((state) => state.auth)
    if (userInfo.accessToken!== null) {
        return children
    }
  return <Navigate to="/login"></Navigate>
}

export default PrivateRoute;
