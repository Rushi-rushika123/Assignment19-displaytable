import React from "react";
export default function Tabledata(props){

return(


<table id='table'>
<thead>
  <tr>
    <th>ID</th>
    <th>First_name</th>
    <th>Last_name</th>
    <th>Email</th>
    <th>Gender</th>
    <th>IP_Address</th>
    <th>Image</th>
    
  </tr>
</thead>
<tbody>
  
  {props.users.map((item,index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.gender}</td>
      <td>{item.ip_address}</td>
      <td><img src={item.image} alt={item.first_name}/></td>
    </tr>
  ))}
</tbody>
</table>

);
}

