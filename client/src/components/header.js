import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header className="nav">
      <nav>
        <NavLink className="navlink" to="/">
          new albums
        </NavLink>
        <NavLink className="navlink" to="/newaddalbum">
          add an album
        </NavLink>
        <NavLink className="navlink" to="/addlabel">
          add a label
        </NavLink>
        <NavLink className="navlink" to="/labels">
          labels
        </NavLink>
      </nav>
    </header>
  )
}
