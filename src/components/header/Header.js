// External imports
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { Link } from "react-router-dom";

// CSS
import './Header.css';





export const Header = () => {
  
  return (
    <div className="Header">
      <Link to='/' style={{ textDecoration: 'none' }}><span>Home</span></Link>
        <nav>
          <ul className="Header_list">
            <li>
              <a href='https://github.com/PauloCollares1'><SiGithub size={30}/></a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/paulo-collares/' style={{ textDecoration: 'none' }}><SiLinkedin size={30} /></a>
            </li>
          </ul>
        </nav>
    </div>
  )
}



