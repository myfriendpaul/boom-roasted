import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useHistory } from 'react-router-dom'
import './SignOut.css'
import  Navigation from '../../components/Navigation/Navigation'


const SignOut = (props) => {
  const { setUser } = props
  const history = useHistory()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/sign-out')
    }
    signOutUser()
  }, [history, setUser])

  return (
    <div className="signOut">
      <Navigation></Navigation>
      <p id="paragraph" >
        We’ll miss you!
        Come back and visit us anytime</p>
    </div>
  )
}


export default SignOut
