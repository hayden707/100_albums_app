import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../global'

export default function AddLabel() {
  const [newLabel, setNewLabel] = useState({
    label: '',
    location: '',
    logo: '',
    link: ''
  })

  async function addLabel(formdata) {
    try {
      const res = await axios.post(`${BASE_URL}/labels`, {
        label: newLabel.label,
        location: newLabel.location,
        logo: newLabel.logo,
        link: newLabel.link
      })
      console.log(formdata)
      console.log(res)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setNewLabel({ ...newLabel, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addLabel()
  }

  return (
    <div>
      <h3>add a label</h3>
      <form className="searchform" onSubmit={handleSubmit}>
        <label className="label">label</label>
        <input
          className="input"
          type="text"
          name="label"
          // required
          onChange={handleChange}
        ></input>
        <label className="label">location</label>
        <input
          className="input"
          type="text"
          name="location"
          // required
          onChange={handleChange}
        ></input>
        <label className="label">logo</label>
        <input
          className="input"
          type="text"
          name="logo"
          // required
          onChange={handleChange}
        ></input>
        <label className="label">site</label>
        <input
          className="input"
          type="text"
          name="link"
          // required
          onChange={handleChange}
        ></input>
        <button className="addLabelButton" type="submit">
          add label
        </button>
      </form>
    </div>
  )
}
