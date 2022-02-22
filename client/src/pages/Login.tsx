import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase'
// import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/')
  }, [user, loading, navigate])

  return (
    <div className='px-10 max-w-md mx-auto font-bold'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold'>Enter your credentials</h1>
        <label htmlFor='email' className='flex flex-col gap-2 text-sm'>
          E-mail Address
          <input
            id='email'
            type='text'
            className='px-4 py-2 rounded-lg outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor='password' className='flex flex-col gap-2 text-sm'>
          Password
          <input
            id='password'
            type='password'
            className='px-4 py-2 rounded-lg outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type='button'
          className='cursor-pointer rounded-lg border border-gray-700 bg-white p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white'
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <p>or</p>
        <button
          type='button'
          className='cursor-pointer rounded-lg border border-red-600 bg-white text-red-600 p-2 font-bold outline-none transition duration-200 hover:bg-red-600 hover:text-white'
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <div>
          <Link
            to='/reset-password'
            className='text-[#1496ad] transition duration-200 hover:underline'
          >
            Forgot Password
          </Link>
        </div>
        <div>
          Don't have an account?{' '}
          <Link to='/register' className='text-[#1496ad] transition duration-200 hover:underline'>
            Register
          </Link>{' '}
          now.
        </div>
      </div>
    </div>
  )
}

export default Login
