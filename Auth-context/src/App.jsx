import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuthContext } from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './context/ProtectedRoutes'

function App() {



  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={
        <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>}/>
    </Routes>

      
      
    </>
  )
}

export default App
