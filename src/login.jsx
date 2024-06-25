import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import google from "./google.png"
import facebook from "./facebook.png"
import { Link} from 'react-router-dom';
import Main1 from './page1';

import './style1.css';
function login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === 's' && password === '123') {
      navigate('/main');
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div className="container">
      <div className="box white-box">
        <div className='headings'>
            <br></br>
          <div>
          </div>
        </div>

        <div className='form'>
          <div className='emailinp'>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <input 
              type="text" 
              placeholder="Email" 
              className="input-box" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className='passwordinp'>
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
            </svg>
            <input 
              type="password" 
              placeholder="Password" 
              className="input-box" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>


          <div className='loginbox'>
            <button className="submitbutton" onClick={handleLogin}>Log In</button>
          </div>
        </div>
      </div>
      <div className="box blue-box">
      </div>
    </div>
  )
}

export default login
