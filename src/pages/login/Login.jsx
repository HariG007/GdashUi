import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [userType, setUserType] = useState('patient');

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  const handleLogin = () => {
    if (userType === 'nurse') {
      window.location.href = '/nursehome'; // Redirect to NurseDashboard
    } else {
      window.location.href = '/patienthome'; // Redirect to PatientDashboard
    }
  };

  return (
    <div className={`login-container ${userType}`}>
      {/* User type selection buttons... */}
      <center>
        <button
          className={`user-type-button ${userType === 'patient' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('patient')}
        >
          Patient Login
        </button>
        <button
          className={`user-type-button ${userType === 'nurse' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('nurse')}
        >
          Nurse Login
        </button>
      </center>

      {/* Login form */}
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            {/* Dynamic header based on user type */}
            <header>{userType === 'patient' ? 'Patient Login' : 'Nurse Login'}</header>
            <form>
              {/* Form fields... */}
              <div className="field input-field">
                <input type="number" placeholder="Phone number" className="input" />
              </div>
              <div className="field input-field">
                <input type="password" id="myInput" placeholder="Token number" className="password" />
              </div>

              {/* Login button */}
              <div className="field button-field">
               <Link to={'/users'}><button >Logic</button></Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
