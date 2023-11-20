
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


function App() {
  const {data: users, isLoading: isUsersLoading, isSuccess: isUsersSuccess} = useGetUsersQuery()
  const {data: items, isLoading: isItemsLoading, isSuccess: isItemsSuccess} = useGetItemsQuery()
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/user' element={<InfoTable columns={userColumns} rows={users} isLoading={isUsersLoading} isSuccess={isUsersSuccess}/>}/>
        <Route path='/item' element={<InfoTable columns={itemColumns} rows={items} isLoading={isItemsLoading} isSuccess={isItemsSuccess}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/new/user' element={<New inputs={userInputs} name="User"  type="new"/>}/>
        <Route path='/new/item' element={<New inputs={itemInputs} name="Item" type="new" />}/>
        <Route path='/update/user/:Id' element={<New inputs={updateUserInputs} name="User" type="update"/>}/>
        <Route path='/update/item/:Id' element={<New inputs={updateItemInputs} name="Item" type="update"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
   