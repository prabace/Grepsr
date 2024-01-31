"use client"
import React, { useState } from 'react';
import { omit } from 'lodash';
import { callbackify } from 'util';

const useForm = (callback) => {

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

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


    const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event) event.preventDefault()
        
        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0 ){
            callback();
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