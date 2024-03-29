import React from 'react'
import Input from '../../Components/Input/Input'
import './AdminPage.css'
import { Link, useNavigate } from 'react-router-dom'



const AdminPage = () => {

    const navigate = useNavigate();

    const isClicked = () => {
        if (true) {
        alert('Submitted successfully');
        navigate('/main-page')
    }else 
     {
        alert('Error');
        navigate('/admin')
    }
}
    
  return (
   <>
      <div className="d-flex flex-column border p-4  ">

      <h1 className='text-center p-4'>Admin Page</h1>
     
      <Input name='title' type='text' label='name' />
     
      <Input name='category' type='text' label='type'  />

      <Input name='price' type='number' label='price'  />

      <Input name='image' type="file"  label="image"/>

<br />
      <button className="btn btn-primary" type='submit' onClick={isClicked}>Submit</button>
    </div>
</>
  )
}


export default AdminPage
