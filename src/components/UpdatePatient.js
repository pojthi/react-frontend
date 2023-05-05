import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function UpdatePatient(props) {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')
  const history = useHistory();

function handleSubmit(event){
  event.preventDefault();
  const patientData= {
    firstName:firstName,
    lastName:lastName,
    age:age,
    gender:gender
  }
var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
  axios.put('http://13.212.101.231:8080/clinicalsapi/patients/'+props.match.params.patientId,config,patientData).then(res=>{
    history.push('/');
  })
}

    return (
      <div>
       <h2>Update Patient:</h2>
       <form>
      Id: <input type="text" name="patientId" align="left" value={props.match.params.patientId} />
      First Name: ({props.match.params.firstName})<input type="text" name="firstName" align="left" onChange={e=>setFirstName(e.target.value)}/>
      Last Name: ({props.match.params.lastName})<input type="text" name="lastName" align="left" onChange={e=>setLastName(e.target.value)}/>
      Age: ({props.match.params.age})<input type="text" name="age" align="left" onChange={e=>setAge(e.target.value)}/>
      Gender: ({props.match.params.gender})<input type="text" name="gender" align="left" onChange={e=>setGender(e.target.value)}/>
      <button onClick={handleSubmit.bind(this)}>Confirm</button>
       </form>
      </div>
    );
  }

export default UpdatePatient;