import * as userActions from '../redux/user/user-actions'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase/firebase.util'
import { Link } from 'react-router-dom'

const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }

  return (
    <div>
      {!hiddenMenu && (
        <div onClick={handleToggle} className="fixed top-0 left-0 z-[11] h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)]" />
      )}
      {!hiddenMenu ? (
        <div className="visible absolute top-[58px] right-[-52px] z-[12] flex w-max flex-col items-center justify-center rounded-[8px] border border-[#c7c7c7] bg-white opacity-100 lg:right-[50%] lg:translate-x-[50%]">
          <div className="w-[100%] border-b border-[#e5edef] p-[10px_20px] pb-[5px]">Hola {user.displayName}</div>
          <div>
            <Link to="/mis-ordenes" onClick={handleToggle}>
              <div className="cursor-pointer p-[15px_20px] text-[14px] text-[#7d7d7d] transition-all duration-300 ease-linear hover:bg-[rgba(255,68,31,0.04)] hover:text-[#ff441f]">
                Mís Ordenes
              </div>
            </Link>

            <div
              className="cursor-pointer p-[15px_20px] text-[14px] text-[#7d7d7d] transition-all duration-300 ease-linear hover:bg-[rgba(255,68,31,0.04)] hover:text-[#ff441f]"
              onClick={() => auth.signOut()}
            >
              Cerrar Sesíon
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UserMenu
