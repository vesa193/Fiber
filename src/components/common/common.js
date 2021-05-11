import React from 'react'
import './common.scss'

import hidePassword from '../../assets/images/hide_password.svg'

const Title = ({ children }) => {
  return (
    <h2 className="title">{children}</h2>
  );
}

const Text = ({ children, className }) => {
  return (
    <p className={`text ${className}`}>{children}</p>
  );
}

const Link = ({ children }) => {
  return (
    <p className="link">{children}</p>
  );
}

const Input = ({ type }) => {
  let res = null

  switch (type) {
    case 'name':
      return res =
        <div className="input-box">
          <label htmlFor="name">Your Name</label>
          <input
            type="name"
            placeholder="John Doe"
          />
        </div>
    case 'email':
      return res =
      <div className="input-box">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="john@example.com"
        />
      </div>
    case 'password':
      return res =
      <div className="input-box">
        <label htmlFor="password">Password</label>
        <div className="input-password">
          <input
            type="password"
            placeholder="At least 8 characters"
          />
          <img src={hidePassword} alt="hide password" />
        </div>
      </div>
    case 'checkbox':
      return res =
      <div className="input-box input-box--checkbox">
        <input
          type="checkbox"
          placeholder="At least 8 characters"
        />
        <p htmlFor="checkbox">
          By creating an account on Fiber, you agree to the
          <br />
          <span className="terms">Terms & Conditions</span><span className="dot">.</span>
        </p>
      </div>
    default:
      return res
  }
}

const Button = ({ children }) => {
  return (
    <div className="button">{children}</div>
  );
}


export {
  Title,
  Text,
  Input,
  Button,
  Link
}
