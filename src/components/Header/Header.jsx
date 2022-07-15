import React from 'react'
import './header.css'
import headerImg from "../../assets/Images/header-img.png";

function Header() {
  return (
    <div className="header">
    <img src={headerImg} alt="" className="banner" />
    <div className="header-text">
      <h1 className="heading1">اردو</h1>
      <h2>/ˈʊəduː,ˈəːduː/</h2>
      <h2>noun</h2>
      <div className="defination">
        <p>
        Urdu is an Indo-Aryan language spoken chiefly in South Asia.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Header