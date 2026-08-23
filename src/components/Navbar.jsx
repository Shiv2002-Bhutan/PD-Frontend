import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const navLinkStyle = ({ isActive }) =>
        `text-xs sm:text-sm tracking-wide transition duration-300 ${
            isActive
                ? 'text-black font-medium'
                : 'text-gray-600 hover:text-black'
        }`

    return (
        <nav className='w-full border-b border-gray-200'>

            <div className='flex items-center justify-between py-5'>

                {/* PD Furniture Logo */}
                <Link
                    to='/'
                    className='flex flex-col leading-none'
                >
                    <span className='font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] text-black'>
                        PD
                    </span>

                    <span className='text-[10px] sm:text-xs tracking-[0.28em] font-medium text-gray-700 mt-1'>
                        FURNITURE
                    </span>
                </Link>


                {/* Navigation */}
                <div className='flex items-center gap-3 sm:gap-5 md:gap-8'>

                    <NavLink
                        to='/'
                        className={navLinkStyle}
                    >
                        HOME
                    </NavLink>

                    <NavLink
                        to='/collections'
                        className={navLinkStyle}
                    >
                        COLLECTIONS
                    </NavLink>

                    <NavLink
                        to='/contact'
                        className={navLinkStyle}
                    >
                        CONTACT
                    </NavLink>

                </div>

            </div>

        </nav>
    )
}

export default Navbar