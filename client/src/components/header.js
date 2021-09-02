import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/addalbum">add an album</NavLink>
        <NavLink to="/labels">labels</NavLink>
      </nav>
    </header>
  )
}
