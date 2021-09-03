import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../global'

export default function LabelList() {
  const [labels, setLabels] = useState([])

  useEffect(() => {
    async function getLabels() {
      const res = await axios.get(`${BASE_URL}/labels`)
      setLabels(res.data.label)
    }
    getLabels()
  }, [])

  return (
    <div className="labelList">
      {labels.map((label) => (
        <div key={label._id} className="labelist">
          <img className="labelLogo" src={label.logo} alt="Label logo" />
          <p>{label.label}</p>
          <p>{label.location}</p>
          <a href={label.link}>site</a>
        </div>
      ))}
    </div>
  )
}
