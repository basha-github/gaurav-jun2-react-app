import React, { useState } from 'react'

import '../css/student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function StudentForm() {

  const stuListForm = useNavigate();

    const [res,setRes] = useState('');

const [rollNo,setRollNo] = useState('');
const [name,setName] = useState('');
const [college,setCollege] = useState('');
const [course,setCourse] = useState('');
const [clang,setClang] = useState('');
const [javalang,setJavalang] = useState('');
const [os,setOs] = useState('');


const getRollNo = (e:any)=>{
    setRollNo(e.target.value);
}
const getName = (e:any)=>{
    setName(e.target.value);
}
const getCollge = (e:any)=>{
    setCollege(e.target.value);
}
const getCourse = (e:any)=>{
    setCourse(e.target.value);
}
const getCLang = (e:any)=>{
    setClang(e.target.value);
}
const getJLang = (e:any)=>{
    setJavalang(e.target.value);
}
const getOs = (e:any)=>{
    setOs(e.target.value);
}


const sendData =(e:FormDataEvent)=>{

    e.preventDefault();

    const student =
    {
        rollNo,
        name,
        college,
        course,
        clang,
        javalang,
        os

    }

    axios.post("http://localhost:8080/jntu/stu/add",student)
    .then(
        (res)=>{
            console.log("data from spring boot-->"+res.data);
            stuListForm("/");
        }
    );
}


  return (
    <div className='stuDes'>

<form>
    <div className='stuRes'>
        {res}
    </div>
  <div className="mb-3">
    <label  className="form-label">RollNo</label>
    <input 
    
    onChange={getRollNo}
    
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input 
    onChange={getName}
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">College</label>
    <input 
    onChange={getCollge}
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Course</label>
    <input 
    onChange={getCourse}
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">C Langauge</label>
    <input 
    onChange={getCLang}
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Java Langauge</label>
    <input 
    onChange={getJLang}
    type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Operating System</label>
    <input 
    onChange={getOs}
    type="text" className="form-control" />
  </div>
  <button
  onClick={sendData}
  type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
