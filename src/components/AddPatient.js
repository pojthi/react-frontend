import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function AddPatient() {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [published,setPublished] = useState('')
  const [createdAt,setCreatedAt] = useState('')
  const history = useHistory();

function handleSubmit(event){
  event.preventDefault();
  const patientData= {
    title:title,
    description:description,
    published:published,
	createdAt: createdAt
  }

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
  axios.post('http://54.255.141.87:8080/api/tutorials',config,patientData).then(res=>{
    history.push('/');
  })
}

    return (
      <div>
       <h2>Create Patient:</h2>
       <form>
      Title: <input type="text" name="title" align="left" onChange={e=>setTitle(e.target.value)}/>
      Description: <input type="text" name="description" align="left" onChange={e=>setDescription(e.target.value)}/>
      Published: <input type="text" name="published" align="left" onChange={e=>setPublished(e.target.value)}/>
	  CreatedAt: <input type="text" name="createdAt" align="left" onChange={e=>setCreatedAt(e.target.value)}/>
      <button onClick={handleSubmit.bind(this)}>Confirm</button>
       </form>
      </div>
    );
  }

export default AddPatient;