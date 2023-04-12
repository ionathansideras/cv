import React from 'react'

export default function Cvfield({backup}) {
    
  return (
    <div className='theCV'>
      <div>{backup.firstname}</div>
      <div>{backup.lastname}</div>
      <div>{backup.email}</div>
      <div>{backup.phonenumber}</div>
      <div>{backup.schoolname}</div>
      <div>{backup.titleofstudy}</div>
      <div>{backup.dateofstudy}</div>
      <div>{backup.companyname}</div>
      <div>{backup.positiontitle}</div>
      <div>{backup.start}</div>
      <div>{backup.end}</div>
    </div>
  )
}
