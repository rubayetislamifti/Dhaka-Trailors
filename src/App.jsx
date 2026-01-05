import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Order from './Order/orderTable'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navigate to='/login'/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>} />
        <Route path='/order/table' element={<Order/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
