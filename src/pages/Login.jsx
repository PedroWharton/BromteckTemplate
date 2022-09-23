import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginNav from '../components/LoginNav'
import '../stylesheets/pages/Login.scss'

export default function Login() {
  return (
    <>
        <LoginNav/>
        <LoginForm/>
    </>
  )
}
