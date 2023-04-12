import { useState } from 'react'
import Cvfield from './Cvfield';
import jsPDF from 'jspdf';

const reset = {
  firstname: '',
  lastname: '',
  email: '',
  phonenumber: '',
  schoolname: '',
  titleofstudy: '',
  dateofstudy: '',
  companyname: '',
  positiontitle: '',
  start: '',
  end: ''
}

function App() {

  const [values, setValues] = useState(reset);
  const [backup, setBackup] = useState(reset);

  function handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function formSub(e){
    e.preventDefault();
    setBackup(values);
    setValues(reset);
  }

  function edit(){
    setValues(backup);
  }

  function toPdf(){
    const element = document.querySelector('.theCV'); // Replace "divId" with the ID of your div
    const pdf = new jsPDF(); // Initialize jsPDF instance
    pdf.html(element, {
      callback: function (pdf) {
        pdf.save('document.pdf');
      }
    });
  }
  
  return (
    <div>
      <form onSubmit={formSub}>
        <div>
          <h2>General information</h2>
          <input type="text" placeholder='First name' name="firstname" onChange={handleInputChange} value={values.firstname}/>
          <input type="text" placeholder='Last name' name="lastname" onChange={handleInputChange} value={values.lastname}/>
          <input type="email" placeholder='Email' name="email" onChange={handleInputChange} value={values.email}/>
          <input type="number" placeholder='Phone number' name="phonenumber" onChange={handleInputChange} value={values.phonenumber}/>
        </div>
        <div>
          <h2>Educational experience</h2>
          <input type="text" placeholder='School name' name="schoolname" onChange={handleInputChange} value={values.schoolname}/>
          <input type="text" placeholder='Title of study' name="titleofstudy" onChange={handleInputChange} value={values.titleofstudy}/>
          <input type="date" placeholder='Date of study' name="dateofstudy" onChange={handleInputChange} value={values.dateofstudy}/>
        </div>
        <div>
          <h2>Practical experience</h2>
          <input type="text" placeholder='Company name' name="companyname" onChange={handleInputChange} value={values.companyname}/>
          <input type="text" placeholder='Position title' name="positiontitle" onChange={handleInputChange} value={values.positiontitle}/>
          <input type="date" placeholder='Start' name="start" onChange={handleInputChange} value={values.start}/>
          <input type="date" placeholder='End' name="end" onChange={handleInputChange} value={values.end}/>
        </div>
        <button type='submit'>Create</button>
      </form>
      <div>
        <Cvfield backup={backup}/>
        <button onClick={edit}>Edit</button>
        <button onClick={toPdf}>Download</button>
      </div>
      
    </div>
  )
}

export default App
