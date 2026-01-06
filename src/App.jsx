import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Order from './Order/orderTable'
import NewOrder from './Order/newOrder'
import PrintOrder from './Order/printOrder'
import Menu from './Menu/menu'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/order/table' element={<Order/>} />
        <Route path='/order/new' element={<NewOrder/>} />
        <Route path='/order/print' element={<PrintOrder/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
