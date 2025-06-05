

import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive})=>isActive? 'green': 'red' }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about/10/king" className={({isActive})=>isActive? 'green': 'red' }>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({isActive})=>isActive? 'green': 'red' }>Contact</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Menu;
