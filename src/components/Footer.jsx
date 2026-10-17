import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const year = new Date().getFullYear()

    const whatsappNumber = '97517308083'

    const whatsappLink = `https://wa.me/${whatsappNumber}`

    const facebookLink =import.meta.env.VITE_FACEBOOK_LINK



    return (
        <div className='mt-32'>

            {/* Footer Main */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-20 py-10'>

                {/* Brand */}
                <div>

                    <h2 className='font-extrabold text-3xl tracking-tight text-black'>
                        PD Furniture
                    </h2>

                    <p className='max-w-md mt-4 text-sm leading-6 text-gray-600'>
                        Quality furniture, premium mattresses, King Koil
                        products and home essentials, carefully selected
                        for comfortable and modern living.
                    </p>

                </div>


                {/* Quick Links */}
                <div>

                    <p className='text-sm font-medium tracking-wider mb-5'>
                        QUICK LINKS
                    </p>

                    <ul className='flex flex-col gap-3 text-sm text-gray-600'>

                        <li>
                            <Link
                                to='/'
                                className='hover:text-black transition'
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/about'
                                className='hover:text-black transition'
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/collections'
                                className='hover:text-black transition'
                            >
                                Collections
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/contact'
                                className='hover:text-black transition'
                            >
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* Contact */}
                <div>

                    <p className='text-sm font-medium tracking-wider mb-5'>
                        GET IN TOUCH
                    </p>

                    <ul className='flex flex-col gap-3 text-sm text-gray-600'>

                        <li>
                            +97517308083
                        </li>

                        <li>
                            +97517111333
                        </li>

                        <li>
                            pdfurniture1987@gmail.com
                        </li>

                    </ul>


                    {/* Social Links */}
                    <div className='flex items-center gap-3 mt-5'>

                        {/* WhatsApp */}
                        <a
                            href={whatsappLink}
                            target='_blank'
                            rel='noreferrer'
                            aria-label='WhatsApp'
                            className='w-9 h-9 flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:border-black transition duration-300'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-5 h-5'
                            >
                                <path d='M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.35-1.66a11.82 11.82 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.42 4.42-9.84 9.85-9.84a9.79 9.79 0 0 1 6.96 2.89 9.79 9.79 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z' />
                            </svg>
                        </a>


                        {/* Facebook */}
                        <a
                            href={facebookLink}
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Facebook'
                            className='w-9 h-9 flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white hover:border-black transition duration-300'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-5 h-5'
                            >
                                <path d='M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.92v-8.43H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.34l-.53 3.49h-2.81v8.43C19.61 23.07 24 18.09 24 12.07Z' />
                            </svg>
                        </a>

                    </div>

                </div>

            </div>


            {/* Copyright */}
            <div>

                <hr className='border-gray-200' />

                <p className='text-center text-gray-500 text-xs sm:text-sm py-5'>
                    &copy; {year} PD Furniture. All rights reserved.
                </p>

            </div>

        </div>
    )
}

export default Footer