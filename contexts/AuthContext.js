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
              return true;
            }
          })
          .catch(err => console.error(err));

      },
      signOut: () => { 
          if (res.user_id) {
            authContext.isSignedIn = false;
            authContext.user_id = null;
          }       
      },

      signUp: async data => {
        const { username, password} = data

        fetch('http://192.168.0.110:3000/users', {
          body: JSON.stringify({
            username,
            password,
            brownie_points : 0
          })
        })
        .then(res => res.json())
        .then(res => {
          authContext.userId = res.user_id;
          authContext.isSignedIn = true;
          return true;
        })
        .catch(err => console.error(err))
      },
      isSignedIn: false,
      userId: null,
      brownie_points: 0
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
