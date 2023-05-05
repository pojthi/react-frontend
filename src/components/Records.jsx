import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Records = ({data}) => {
    let initialValue = '5';
    
    const [patientData,setPatientData] = useState([])
    
    const [name, setName] = useState(initialValue);
    
    const handleChange = (event) => {
        const value = event.target.value;
        setName(value);
      };

    let Count = 0;
    let Average = 0.00;
    let Min = 200;
    let Max = 0;
    let Male = 0;
    let Female = 0;

    let rowPerPage = 8;

    let pages = [];



    data.forEach(data => {
        Count += 1;
        
    })
    //Count /= 24

    for (let i = 1; i <= Math.ceil(Count/rowPerPage) ; i++)
    pages[i]=i;
/*
    data.forEach(data => {
        Average += data.age;
        
    })
    Average /= Count

    data.forEach(data => {
        if(data.age < Min) Min = data.age;
        
    })
    
    data.forEach(data => {
        if(data.age > Max) Max = data.age;
        
    })

    data.forEach(data => {
        if(data.gender == 'Male') Male += 1;
        
    })

    data.forEach(data => {
        if(data.gender == 'Female') Female += 1;
        
    })

    Male *= 100;
    Male /= Count;

    Female *= 100;
    Female /= Count;
*/


  return (
    <div>
    <h1>Tutorials in page: {Count}</h1> 
    <table align='center' className="table">
           <thead>
               <tr>
                   <th style={{textAlign: 'center'}}>Id</th>
                   <th style={{textAlign: 'center'}}>Title</th>
                   <th style={{textAlign: 'center'}}>Description</th>
                   <th style={{textAlign: 'center'}}>Published</th>
                   <th style={{textAlign: 'center'}}>CreatedAt</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {data.map(patient=><RowCreator item={patient}/>)}
            </tbody>
       </table>
       <p><Link to={'/addPatient'}>Register Tutorials</Link></p>
       <p>Average age: {Average}</p>
       <p>Minimum age: {Min}</p>
       <p>Maximum age: {Max}</p>
       <p>Male (%): {Male}</p>
       <p>Female (%): {Female}</p>
       </div> 
  ) 
}

class RowCreator extends React.Component{

    render(){

        var patient = this.props.item;
        return <tr>
	        <td>{""+patient._id}</td>
            <td>{patient.title}</td>
            <td>{patient.description}</td>
            <td>{""+patient.published}</td>
            <td>{patient.createdAt}</td>
            <td><div title="Add new patient"><a href={'/addPatient/'} ><img src={require('../img/add.jpg')} /></a></div></td>
            <td><div title="Add new clinicals"><a href={'/addClinicals/'+patient._id} ><img src={require('../img/addg.jpg')} /></a></div></td>
            <td><div title="Delete patient"><img src={require('../img/delete.jpg')} onClick={() => {if(window.confirm('Delete item Id: '+patient._id+' ?')){deletePost(patient._id)}}} /></div>
            </td>
            <td><div title="Update patient"><a href={'/addPatient/'+patient._id+'/'+patient.title+'/'+patient.description+'/'+patient.published+'/'+patient.createdAt} ><img src={require('../img/change.jpg')} /></a></div> 
            </td>
        </tr>
        
    }
}

const deletePost = async (id) => {
    await fetch(`http://52.221.243.104:8080/clinicalsapi/patients/${id}`, {
       method: 'DELETE',
    }).then((response) => {
       if (response.status === 200) {
          window.location.reload();
       } else {
          return;
       }
    });
    };

export default Records  