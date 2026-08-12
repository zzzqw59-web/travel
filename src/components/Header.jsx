import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router'

const Header = ({rightChild}) => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }
  return (
    <div className='container'>
      <h1 onClick={goHome}>My travel journal.</h1>
      <div className="header_rightChild">{rightChild}</div>


    </div>
  )
}

export default Header
