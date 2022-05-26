import React from 'react'
import styles from './Tabs.module.scss'
import { NavLink } from "react-router-dom";

const Tabs = () => {
 
	return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.btnActive : styles.btn
        }
        to="/designs" 
      >
        Designs
      </NavLink>
      <NavLink 
        to="/setouts" 
        className={({ isActive }) =>
          isActive ? styles.btnActive : styles.btn
        }
      >
        Setouts
      </NavLink>
			</nav>
	)
}

export default Tabs
