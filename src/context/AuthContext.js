import React, { useState, useContext, createContext, useCallback, useMemo } from 'react'

import { useHistory } from 'react-router-dom'
import { useAxios } from '../context/AxiosContext'

const INITIAL_STATE = {
  currentUser: null,
  hiddenMenu: true,
  loading: false,
  error: null,
  login: (email, password) => {},
  logout: () => {},
  authCheckState: () => {}
}

const authContext = createContext(INITIAL_STATE)

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const history = useHistory()
  const axios = useAxios()
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hiddenMenu, setHiddenMenu] = useState(true)
  const [error, setError] = useState(null)

  const logout = useCallback(() => {
    setCurrentUser(null)
    setLoading(false)
    setError(null)
    localStorage.removeItem('authData')
    localStorage.removeItem('expirationDate')
  }, [])

  const checkAuthTimeout = useCallback(
    expirationTime => {
      console.log('checkAuthTimeout ->', new Date(expirationTime))
      setTimeout(() => {
        logout()
        console.log('checkAuthTimeout -> Run Auto logout')
      }, expirationTime)
    },
    [logout]
  )

  const login = useCallback(
    async (email, password) => {
      setLoading(true)
      try {
        const response =
          (await axios.post) <
          Auth >
          ('/auth/login',
          {
            email,
            password
          })
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn).getTime()
        console.log('expirationDate', expirationDate)
        history.push('/home')
        localStorage.setItem('authData', JSON.stringify(response.data))
        localStorage.setItem('expirationDate', expirationDate.toString())
        setCurrentUser(response.data)
        setLoading(false)
        setError(null)

        checkAuthTimeout(response.data.expiresIn)
      } catch (error) {
        console.log(error)
        setLoading(false)
        let err = error
        let errorRes = err.response?.data ? err.response?.data : null

        setError(errorRes)
      }
    },
    [checkAuthTimeout, history, axios]
  )

  const authCheckState = useCallback(() => {
    const stringData = localStorage.getItem('authData')
    const authData = JSON.parse(String(stringData))
    console.log(authData)
    if (!authData?.token) {
      logout()
    } else {
      const expirationDate = new Date(parseInt(localStorage.getItem('expirationDate')))
      if (expirationDate > new Date()) {
        checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
        setCurrentUser(authData)
      } else {
        logout()
      }
    }
  }, [logout, checkAuthTimeout])

  return useMemo(() => {
    return {
      currentUser,
      loading,
      hiddenMenu,
      error,
      login,
      logout,
      authCheckState
    }
  }, [currentUser, loading, hiddenMenu, error, login, logout, authCheckState])
}
