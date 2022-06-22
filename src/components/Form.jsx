import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
const Form = ({createMovie, updateMovieById, objectUpdate, handleSubmit, reset, register}) => {

  const defaultValuesForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }

  const onSubmit = data => {
    if(objectUpdate !== undefined){
      updateMovieById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createMovie(data)
    }
    reset(defaultValuesForm)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-list-elements'>
          <label htmlFor="first_name">First Name: </label>
          <input type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='form-list-elements'>
          <label htmlFor="last_name">Last Name: </label>
          <input type="text" id='last_name' {...register('last_name')}/>
        </div>
        <div className='form-list-elements'>
          <label htmlFor="email">Email: </label>
          <input type="email" id='email' {...register('email')}/>
        </div>
        <div className='form-list-elements'>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' {...register('password')}/>
        </div>
        <div className='form-list-elements'>
          <label htmlFor="birthday">Birthday: </label>
          <input type="date" id='birthday' {...register('birthday')}/>
        </div>
        <button>✅ Submit</button>
    </form>
  )
}

export default Form