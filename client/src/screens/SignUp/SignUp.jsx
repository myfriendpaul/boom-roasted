import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import  Layout from '../../components/Layout/Layout'
import  Navigation from '../../components/Navigation/Navigation'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className='submitButton'type='submit'>Sign Up</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form

  return (
    // <Layout user={props.user}>
    <div className='signUp'>
      <Navigation></Navigation>
      <h3 className='h3SignUp'>SIGN UP</h3>
      
      <form className='inputForm'
        onSubmit={onSignUp}>
        <label id='labelSignUp'>Username</label>
        <br />
        <input
          required
          className='inputsize'
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
        <br />
        <label id='labelSignUp'>Email address</label>
        <input
          required
          className='inputsize'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />
        <br />
        <label id='labelSignUp'>Password</label>
        <input
          required
          className='inputsize'
          name='password'
          value={password}
          type='password'
          onChange={handleChange}
        />
        <br />
        <label id='labelSignUp'>Password Confirmation</label>
        <input
          required
          className='inputsize'
          name='passwordConfirmation'
          value={passwordConfirmation}
          type='password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      </div>
    // </Layout>
  )
}

export default SignUp
