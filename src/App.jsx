import { useEffect } from 'react'
import { Navbar, Orders } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useOpenFood } from './hooks/useOpenFood'
import { useSelector, useDispatch } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import * as userActions from './redux/user/user-actions'

import { Home, Checkout, Login } from './pages/'

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        cb(action({ id: snapShot.id, ...snapShot.data() }))
      })
    } else {
      cb(action(null))
    }
  })
}

const App = () => {
  const openFood = useOpenFood()
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubcribe = onAuthStateChange(dispatch, userActions.setCurrentUser)
    return () => {
      unsubcribe
    }
  }, [dispatch])

  return (
    <BrowserRouter className="w-full">
      <Navbar />
      <Orders />
      <Routes>
        <Route path="/" element={<Home openFood={openFood} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home openFood={openFood} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
