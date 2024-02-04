"use client"
import React, { useState } from 'react';
import { omit } from 'lodash';
import { callbackify } from 'util';
import { create } from '@/actions/action';
import { useRouter } from 'next/navigation';

const useForm = (callback) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const router = useRouter()
    const validate = (event, name, value) => {


        switch (name) {
            case 'username':
                if (value.length <= 4) {
                    setErrors({
                        ...errors,
                        username: 'Username must have atleast 5 letters'
                    })
                } else {
                    let newObj = omit(errors, "username")
                    setErrors(newObj)

                }
                break;

            case 'password':
                if (
                    !new RegExp( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password must contain special character, number, uppercase and lowercase. Min 8 characters required'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                }
                break;

            default:
                break;
        }
    }

    //A method to handle form inputs

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        let name = event.target.name;
        let value = event.target.value;

        validate(event, name, value);

        setValues({
            ...values,
            [name]: value,

        })
    }


    const  handleSubmit = async(event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) event.preventDefault()
        
        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0 ){
            callback();
            
            try {
               
                console.log("hello")
                const usersResponse = await fetch("https://dummyjson.com/users");
                const usersData = await usersResponse.json();
          
                // Randomly select a user
                const randomUser =
                  usersData.users[Math.floor(Math.random() * usersData.users.length)];
                console.log("🚀 ~ handleFormSubmit ~ randomUser:", randomUser);
          
                const response = await fetch("https://dummyjson.com/auth/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username: randomUser.username,
                    password: randomUser.password,
                    expiresInMins: 180,
                  }),
                });
                if (response.ok) {
                  const data = await response.json();
                  // localStorage.setItem("userToken", data.token);
                  await create(data.token);
                  router.push("/product");
                }
              } catch (error) {
                console.error("Login failed", error);
              }

        }
        else
        {
            alert("there is an error!");
        }
        }

    return {
        values,
        errors,
        handleChange,
        handleSubmit

    }
}

export default useForm