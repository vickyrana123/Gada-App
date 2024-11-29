import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, mobile, gender })
      });
      alert('User registered successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setMobile('');
      setGender('');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center" style={{color: "blue"}}>Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label className='l1' htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label  className='l1' htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label  className='l1' htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label  className='l1' htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label  className='l1' htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3" style={{marginLeft:"50px", marginRight: "50px"}}>
                  <label  className='l1' htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option className='o1' value="">Select</option>
                    <option className='o1' value="male">Male</option>
                    <option className='o1' value="female">Female</option>
                    <option className='o1' value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{marginLeft: "160px", paddingLeft: "70px", paddingRight: "70px"}}>
                  Register
                </button>
              </form>
              {error && <p className="text-danger mt-3">{error}</p>}
              <div className="text-center mt-3">
                <a href="/login" className="btn btn-link">Already have an account? Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
