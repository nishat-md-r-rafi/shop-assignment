
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {InfoTable} from './components/infoTable/InfoTable'
import {Navbar} from './components/navbar/Navbar'
import { Login } from './pages/login/Login'
import { New } from './pages/new/New'
import { userInputs, itemInputs,updateItemInputs, updateUserInputs } from '../inputSource'
import {userColumns, itemColumns} from "../datatablesource"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/user' element={<InfoTable columns={userColumns}/>}/>
        <Route path='/item' element={<InfoTable columns={itemColumns}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/new/user' element={<New inputs={userInputs} name="User"/>}/>
        <Route path='/new/item' element={<New inputs={itemInputs} name="Item"/>}/>
        <Route path='/update/user/:Id' element={<New inputs={updateUserInputs} name="User"/>}/>
        <Route path='/update/item/:Id' element={<New inputs={updateItemInputs} name="Item"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
   