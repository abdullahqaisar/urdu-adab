import React from 'react'
import bannerImg from "../../assets/Images/banner-img.jpg";

function Header() {
  return (
    <div className="header">
    <img src={bannerImg} alt="" className="banner" />
    <div className="header-text">
      <h1 className="heading1">اردو</h1>
      <h2>/ˈʊəduː,ˈəːduː/</h2>
      <h2>noun</h2>
      <div className="defination">
        <p>
          An Indic language closely related to Hindi but written in the
          Persian script
        </p>
      </div>
    </div>
  </div>
  )
}

export default Header