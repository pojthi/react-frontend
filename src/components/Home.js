import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
import AddPatient from "./AddPatient";

import Records from './Records';
import Pagination from './Pagination';


function Home() {

        
      
    const initialValue = '5';
    
    const [patientData,setPatientData] = useState([])
    
    const [name, setName] = useState(initialValue);
    
      const [data, setData] = useState([])
      const [loading, setLoading] = useState(true);
  
      const [currentPage, setCurrentPage] = useState(1);
      const [recordsPerPage,setRecordPerPage] = useState(5);
  
      const indexOfLastRecord = currentPage * recordsPerPage;
      const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
      const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
      const nPages = Math.ceil(data.length / recordsPerPage)

      const handleChange = (event) => {
        const value = event.target.value;
        setRecordPerPage(value);
      };
    /*
      useEffect(() => {
        axios.get('./MOCK_DATA.json')
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])
*/
  useEffect(() => {
    document.title = 'React + NodeJS Fullstack Web Appliccation';
  }, []);

var config = {
    headers: {'Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':'GET, POST, DELETE, *'}
};

    useEffect(()=>{
        axios.get('http://54.255.141.87:8080/api/tutorials',config).then(res=>{
            setData(res.data);setLoading(true);
        })
	  
    },patientData)
    



    let Count = 0;
    let Average = 0.00;
    let Min = 200;
    let Max = 0;
    let Male = 0;
    let Female = 0;

    let rowPerPage = name;


    patientData.forEach(data => {
        Count += 1;
        
    })
    //Count /= 24
    //Count = data.length;
/*
    patientData.forEach(data => {
        Average += data.age;
        
    })
    Average /= Count

    patientData.forEach(data => {
        if(data.age < Min) Min = data.age;
        
    })
    
    patientData.forEach(data => {
        if(data.age > Max) Max = data.age;
        
    })

    patientData.forEach(data => {
        if(data.gender == 'Male') Male += 1;
        
    })

    patientData.forEach(data => {
        if(data.gender == 'Female') Female += 1;
        
    })

    Male *= 100;
    Male /= Count;

    Female *= 100;
    Female /= Count;
*/

    
    return (
        <div className='container mt-5'>
        
        <Records data={currentRecords}/>
        <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        <form class="form-inline">
        <div class="form-group">
      <label for="recordPerPage">Row Per Page:</label>
      <select id="recordPerPage" class="form-control" value={recordsPerPage} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
    </div>
        <br/>
        
        </form>
        
    </div>


    /*
      <div>
       <div><h1>Patients: {Count}</h1></div>
       <table align='center' id="myTable">
           <thead>
               <tr>
                   <th style={{textAlign: 'center'}}>Id</th>
                   <th style={{textAlign: 'center'}}>First Name</th>
                   <th style={{textAlign: 'center'}}>Last Name</th>
                   <th style={{textAlign: 'center'}}>Age</th>
                   <th style={{textAlign: 'center'}}>Gender</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {patientData.map(patient=><RowCreator item={patient}/>)}
            </tbody>
       </table>
       <p><Link to={'/addPatient'}>Register Patient</Link></p>
       <p>Average age: {Average}</p>
       <p>Minimum age: {Min}</p>
       <p>Maximum age: {Max}</p>
       <p>Male (%): {Male}</p>
       <p>Female (%): {Female}</p>
       
       
        
       
    <form >
          Row Per Page:
          <select value={name} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        
        
        
      </form>
      </div>
*/
    );

   
  }

  
class RowCreator extends React.Component{

    render(){

        var patient = this.props.item;
        return <tr>
            <td>{patient._id}</td>
            <td>{patient.title}</td>
            <td>{patient.description}</td>
            <td>{patient.published}</td>
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
    await fetch(`http://54.255.141.87:8080/api/tutorials/${id}`, {
       method: 'DELETE',
    }).then((response) => {
       if (response.status === 200) {
          window.location.reload();
       } else {
          return;
       }
    });
    };

    
          
    
    
export default Home;












