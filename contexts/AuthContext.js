import React, { createContext, useMemo } from 'react';
import { AsyncStorage } from 'react-native';

const AuthContext = createContext();


export const AuthProvider = props => {
  const authContext = useMemo(
    () => ({
      signIn: async data => {
        const { username, password } = data;

        fetch('http://..../login', {
          body: JSON.stringify({
            username, password
          })
        })
          .then(res => res.json())
          .then(res => {
            if (res.user_id) {
              authContext.userId = res.user_id;
              authContext.isSignedIn = true;
              AsyncStorage.setItem('userId', res.user_id);
            }
          })
          .catch(err => console.error(err));

      },
      signOut: () => { },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
      },
      isSignedIn: false,
      userId: null,
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
