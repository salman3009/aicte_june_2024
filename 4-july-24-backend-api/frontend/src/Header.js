import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  console.log("coming here");
  //const navigate = useNavigate();
  return (
    <div className='row' style={{ "background": "#e1d9d9" }}>
      <div className='col-md-4'>
        <h1>Header component</h1>
      </div>
    </div>
  )
}

export default Header