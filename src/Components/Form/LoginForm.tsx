// LoginForm.tsx

<<<<<<< HEAD
import React, { FC, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
=======
import Button from '../Button/Button'
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'
import { Link, useNavigate } from 'react-router-dom'
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7

const LoginForm: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent the default form behavior
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
<<<<<<< HEAD
    navigate("/main-page");
=======
    const isAdminLogin = formData.get('check') === 'on';
    if(isAdminLogin){
      navigate('/admin')
    } else {
      navigate('/main-page')
    }
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7
  };

  return (
    <div>
      <h2>
        Login <i className="ri-user-line"></i>
      </h2>
      <form onSubmit={handleSubmit} className="col border rounded p-3">
        <div>
          <Input name="email" type="email" label="Email" />
        </div>
        <br />
        <div>
          <Input name="password" type="password" label="Password" />
        </div>
        <br />
<<<<<<< HEAD
        <div className="col-auto">
          <Button type="submit" label="Login" />
=======
        <div className='col-auto'>
        <Checkbox name='check' type='checkbox' label='Admin' />
        </div>
        <br />
        <div className='col-auto'>
          <Button type='submit' />
         
>>>>>>> 1765c9ea1d39e22671efafdf39b9350750fa4bb7
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
