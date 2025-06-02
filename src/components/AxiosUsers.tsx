import axios from "axios";
import React, { useEffect, useState } from "react";

interface MyUsers{
    id:number,
    // int a; 
    name:string,
    email:string,
    username:string

}


export default function AxiosUsers() {
  const [axiosUsers, setAxiosUsers] = useState<MyUsers[]>([]);

  useEffect(
    ()=>{
      
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(
            (xyz)=>{
                setAxiosUsers(xyz.data);
            }
        );
        // get--- read
        // post--- create
        //delete--- delete
        // put--- update
    }
  );



  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">UserName</th>
            
          </tr>
        </thead>
        <tbody>
          {axiosUsers.map((user) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.address.geo.lat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
