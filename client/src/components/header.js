import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
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
