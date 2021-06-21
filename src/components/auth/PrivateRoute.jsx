import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useAuth} from '../../contexts/auth/AuthContext'

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({component: Componet, ...rest}) {
    const { isLogged } = useAuth();
    return (
        <div>
            <Route
            {...rest} render={props =>{
                return isLogged ? <Componet {...props} /> : <Redirect to='/auth/login'/>
            }}
            >
            </Route>
        </div>
    )
}