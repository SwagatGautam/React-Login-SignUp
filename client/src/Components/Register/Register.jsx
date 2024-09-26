import React from 'react'
import './Register.css'
import '../../App.css'

import { Link } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

//importing assets
import video from '../../RegisterAssets/RegisterVideo.mp4'
import logo from '../../RegisterAssets/logo.png'

const Register = () => {
  return (
    <div className='registerPage flex'>
    <div className='container flex'>
      <div className="videoDiv">
        <video src={video} autoPlay loop muted></video>

        <div className="textDiv">
          <h2 className='title'>Create And Sell Extraordinary Products</h2>
          <p>Adopt the peace of nature!</p>
        </div>
        <div className="footerDiv flex">
          <span className='text'>Have an account?</span>
          <Link to={'/register'}>
            <button className='btn'>Login</button>
          </Link>
        </div>
      </div>

      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt='Logo Image' />
          <h3>Let Us Know You!</h3>
        </div>

        <form action='' className='form grid'>

          <div className="inputDiv">
            <label htmlFor='email'>email</label>
            <div className='input flex'>
            <MdEmail className='icon'/>
              <input type='email' id='email' placeholder='Enter Email' />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor='password'>Password</label>
            <div className='input flex'>
            <BsFillShieldLockFill className='icon'/>
              <input type='password' id='password' placeholder='Enter Password' />
            </div>
          </div>

          <button type='submit' className='btn flex'>
            <span>Register</span>
            <AiOutlineSwapRight className='icon'/>
          </button>

          <span className='forgotPassword'>
            Forgot your password? <a href=''>Click Here</a>
          </span>

        </form>

      </div>

    </div>
    </div>
  )
}

export default Register

