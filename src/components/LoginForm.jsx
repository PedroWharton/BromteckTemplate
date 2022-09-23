import React, { useState } from 'react'
import '../stylesheets/components/LoginForm.scss'

export default function LoginForm() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
      };

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    Iniciar Sesion
                </div>
                <div className="input-container">
                    <label style={{display: 'none'}}>Username </label>
                    <input type="text" name="uname" placeholder='Mail o Nombre de Usuario' required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label style={{display: 'none'}}>Password </label>
                    <input type="password" name="pass" placeholder='Contraseña' required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
    
    // User Login info
    const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    
      

    return (
        <div className="login-form">
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
    )
}

