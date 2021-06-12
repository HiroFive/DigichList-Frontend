/* eslint-disable react/prop-types */
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
    const [currentUser, setCurrentUser] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(true)

    const login = async (email, password) => {
        try {
            var response = {}
            await fetch('https://digichlistbackend.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(props => response = props)
            setIsLogged(response.ok)
            return response
        } catch (error) {
            return { error: error }
        }
    }

    const logout = async () => {
        var response = {}
        await fetch('https://digichlistbackend.herokuapp.com/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
        }).then(props => response = props)
        setIsLogged(!response.ok)
    }

    useEffect(() => {
        fetch('https://digichlistbackend.herokuapp.com/admin', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: 'include',
        }).then(
            res => {
                setIsLogged(res.ok)
                return res.json()
            }
        ).then(reqResponse =>{
            setCurrentUser(reqResponse) 
            //     () => {
            //     var newObject = {
            //         id: reqResponse.id,
            //         username: reqResponse.username,
            //         password: reqResponse.password,
            //         email: reqResponse.email,
            //         accessLevel: 0,
            //     }
            //     return newObject
            // }
            setLoading(false)
        } )
    }, [isLogged])

    const authContextValue = {
        currentUser,
        isLogged,
        login,
        logout,
    }
    return <AuthContext.Provider value={authContextValue}>
        {!loading && children}
    </AuthContext.Provider>
}

export { AuthProvider, useAuth }