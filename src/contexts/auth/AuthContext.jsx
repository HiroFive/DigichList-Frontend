import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';



async function login(email, password) {
    console.log(`${email}, ${password}`);
    await fetch('https://digichlistbackend.herokuapp.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password
        })
    })
    // const CurrentUser = await fetch('https://digichlistbackend.herokuapp.com/admin', {
    //     headers: { 'Content-Type': 'application/json' },
    //     credentials: 'include',
    // })
    // if (!CurrentUser) {
    //     await fetch('https://digichlistbackend.herokuapp.com/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         credentials: 'include',
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })
    //     })
    // }
    // console.log(CurrentUser)
}
export { login }
function logout() {
    return
}
function resetPassword(email) {
    return
}
