import React from 'react';
import { useForm } from "react-hook-form"
import './App.css';

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("firstname", {
          required: {
            value: true,
            message: 'this is required'
          }, maxLength: 20
        })} />
        <input {...register("lastname", {
          required: true, maxLength: {
            value: 6,
            message: 'error message'
          }
        })} />
        <select{...register("gender", { required: true })}>
          <option value="female" >Female</option>
          <option value="male">Male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
