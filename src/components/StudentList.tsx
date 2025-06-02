import axios from "axios";
import React, { useEffect, useState } from "react";

import '../css/student.css'
import { useNavigate } from "react-router-dom";

interface MyStudent {
  rollNo: number;
  name: string;
  college: string;
  course: string;
  clang: number;
  javalang: number;
  os: number;
}

export default function StudentList() {
  const [stuList, setStuList] = useState<MyStudent[]>([]);

  const stuForm = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/jntu/stu/get/all").then((res) => {
      setStuList(res.data);
    });
  });

const gotoStudentForm = ()=>{

    stuForm("/studentForm");
}

  return (
    <div className="keerthika">
        <div>
        <button
        onClick={gotoStudentForm}
        type="button" 
        className="btn btn-warning">Add</button>
      
        </div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">RollNo</th>
            <th scope="col">Name</th>
            <th scope="col">CollegeName</th>
            <th scope="col">Course Name</th>
            <th scope="col">C Language</th>
            <th scope="col">Java Language</th>
            <th scope="col">Operating System</th>
          </tr>
        </thead>
        <tbody>
          {stuList.map((student) => (
            <tr>
              <th scope="row">{student.rollNo}</th>
              <td>{student.name}</td>
              <td>{student.college}</td>
              <td>{student.course}</td>
              <td>{student.clang}</td>
              <td>{student.javalang}</td>
              <td>{student.os}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
