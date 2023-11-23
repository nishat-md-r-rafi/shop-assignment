
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {InfoTable} from './components/infoTable/InfoTable'
import {Navbar} from './components/navbar/Navbar'
import { Login } from './pages/login/Login'
import { New } from './pages/new/New'
import { userInputs, itemInputs,updateItemInputs, updateUserInputs } from '../inputSource'
import {userColumns, itemColumns} from "../datatablesource"
import { useGetUsersQuery } from './features/users/usersApi'
import { useGetItemsQuery } from './features/items/itemsApi'
import { useSelector } from 'react-redux'
import PrivateRoute from './components/utils/PrivateRoute'



function App() {
  const {data: users, isLoading: isUsersLoading, isSuccess: isUsersSuccess} = useGetUsersQuery()
  const {data: items, isLoading: isItemsLoading, isSuccess: isItemsSuccess} = useGetItemsQuery()
  const token  = useSelector((state) => state.auth.accessToken)
  return (
    <BrowserRouter>
      <Navbar/>

    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Login/>}/>
      <Route path='/user' element={<PrivateRoute><InfoTable columns={userColumns} rows={users} isLoading={isUsersLoading} isSuccess={isUsersSuccess}/> </PrivateRoute>} />
      <Route path='/item' element={<PrivateRoute> <InfoTable columns={itemColumns} rows={items} isLoading={isItemsLoading} isSuccess={isItemsSuccess}/>  </PrivateRoute>}/>
      <Route path='/new/user' element={<PrivateRoute><New inputs={userInputs} name="User"  type="new"/></PrivateRoute>}/>
      <Route path='/new/item' element={<PrivateRoute><New inputs={itemInputs} name="Item" type="new" /></PrivateRoute>}/>
      <Route path='/update/user/:Id' element={<PrivateRoute><New inputs={updateUserInputs} name="User" type="update"/></PrivateRoute>}/>
      <Route path='/update/item/:Id' element={<PrivateRoute><New inputs={updateItemInputs} name="Item" type="update"/></PrivateRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
   