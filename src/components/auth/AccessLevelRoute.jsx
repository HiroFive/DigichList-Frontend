import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/auth/AuthContext';

// eslint-disable-next-line react/prop-types
export default function AccessLevelRoute({ component: Componet, ...rest }) {
    const { currentUser } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return currentUser.accessLevel == 2 ? (
                        <Componet {...props} />
                    ) : (
                        <Redirect to='/workflow/dashboard' />
                    );
                }}
            ></Route>
        </div>
    );
}
