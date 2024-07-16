import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const HeaderView = () => {
  return (
    <header>
        <Link to={"/home"} className='h-logo'>
            <img src="/public/c-logo.png" alt="" />
            <h3 className='text-white fs-3'>Coinmania</h3>
        </Link>
        <div className="buttons">
            <NavLink to={"/home"}>Anasayfa</NavLink>
            <NavLink to={"/"}>Kayıt Ol</NavLink>
        </div>
    </header>
  )
};

export default HeaderView;