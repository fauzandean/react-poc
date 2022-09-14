import React, { useEffect, useState } from 'react';
import axios from "axios";
//import styles from "../userview.css";
import { Link, useLocation } from "react-router-dom";

export default function UserView(){

     const location = useLocation();
     const l = location.state.id;
     const [userList, setUserList] = useState([]);

      useEffect(() => {
        axios.get('https://reqres.in/api/users/'+l).then(res => {
          setUserList(res.data.data);
        });
      }, []);

    return (
        <div>
        <table class="table table-sm mt-3">

        <tbody>
          <tr> 
            <td style={{
        backgroundColor: "#F5F5F5",
        borderColor: "#F5F5F5",
        marginRight:"25px"
      }}>
         
        <img style={{
        width:"100%",
        height:"100%"
      }}
        src={userList.avatar}  /></td>
          
            <td style={{
        backgroundColor: "#F5F5F5",
        borderColor: "#F5F5F5",
        marginLeft: "20px"
      }}>
                <p>First Name :     {userList.first_name}</p>
                <p>Last Name :      {userList.last_name}</p>
                <p>Email :          {userList.email}</p>
            </td>
           
           </tr>

        </tbody>
      </table>

      </div>
  );
}
