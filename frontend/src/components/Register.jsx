import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [message, setMessage] = useState("")
    const {registerUser, signInWithGoogle} = useAuth()
    const {
          register,
          handleSubmit,
          watch,
          formState: { errors },
    } = useForm()

    // register user

    const onSubmit = async (data) => {
        console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registered successfully!")
        } catch (error) {
            setMessage("Please provide a valid email and password")
            console.error(error)
        }
    }
    
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!")
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!")
            console.error(error)
        }
    }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
                    <input 
                    {...register("email", { required: true })}
                    type='email' name='email' id='email' placeholder='Email address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
                    <input 
                    {...register("password", { required: true })}
                    type='password' name='password' id='password' placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div className=''>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none'>Register</button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Have an account? <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>

            {/* Google Sign in */}
            <div className='mt-4'>
                <button 
                onClick={handleGoogleSignIn}
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle className='mr-2'></FaGoogle>
                    Sign up with Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default Register