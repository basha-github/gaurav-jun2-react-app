import React from 'react'
import AxiosUsers from './components/AxiosUsers'
import StudentForm from './components/StudentForm'
import Login from './components/Login'
import StudentList from './components/StudentList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" element={<StudentList />} />
<Route path="/studentForm" element={<StudentForm />} />


</Routes>

</BrowserRouter>

    </div>
  )
}
