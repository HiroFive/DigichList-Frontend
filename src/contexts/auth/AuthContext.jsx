/* eslint-disable react/prop-types */
import { EmailJSResponseStatus } from 'emailjs-com';
import React, { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext({})

const useAuth = () => useContext(AuthContext);

// async function login(email, password) {
//     // console.log(`${email}, ${password}`);
//     var some = await fetch('https://digichlistbackend.herokuapp.com/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({
//             email,
//             password
//         })
//     })
//     console.log(some)
//     // const CurrentUser = await fetch('https://digichlistbackend.herokuapp.com/admin', {
//     //     method: 'GET',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     credentials: 'include',
//     // })
//     // if (!CurrentUser) {
//     //     await fetch('https://digichlistbackend.herokuapp.com/login', {
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         credentials: 'include',
//     //         body: JSON.stringify({
//     //             email,
//     //             password
//     //         })
//     //     })
//     // }
//     // console.log(CurrentUser)
// }
// export { login }

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
    const [loading, setLoading] = useState(true)

    const login = async (email, password) => {
        try {
            var response = {}
            await fetch('https://digichlistbackend.herokuapp.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(props => response = props)
            setCurrentUser(response.ok)
            return response
        } catch (error) {
            return { error: error }
        }
    }

    const logout = async() => {
        var response = {}
        await fetch('https://digichlistbackend.herokuapp.com/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        }).then(props => response = props)
        setCurrentUser(!response.ok)
        console.log(!response.ok)
    }

    useEffect(() => {
        fetch('https://digichlistbackend.herokuapp.com/admin', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        }).then(
            res => {
                setCurrentUser(res.ok)
                setLoading(false)
            }
        )
    }, [currentUser])

    const authContextValue = {
        currentUser,
        login,
        logout,
    }
    return <AuthContext.Provider value={authContextValue}>
        {!loading && children}
    </AuthContext.Provider>
}

export { AuthProvider, useAuth }