import React from 'react'
import Title from '../components/Title'

const Contact = () => {

    const whatsappNumber = '97577441715'
    const whatsappLink = `https://wa.me/${whatsappNumber}`

    const facebookLink = 'https://www.facebook.com/'

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* Heading */}
            <div className='text-center py-10 sm:py-14'>

                <div className='text-2xl sm:text-3xl md:text-4xl'>
                    <Title
                        text1={'GET IN'}
                        text2={'TOUCH'}
                    />
                </div>

                <p className='max-w-xl mx-auto mt-4 text-sm text-gray-600 leading-6'>
                    Have a question about our furniture, mattresses,
                    King Koil products or home essentials?
                    Our team is happy to assist you.
                </p>

            </div>


            {/* Contact Options */}
            <div className='max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5'>

                {/* WhatsApp */}
                <a
                    href={whatsappLink}
                    target='_blank'
                    rel='noreferrer'
                    className='group border border-gray-200 p-8 sm:p-10 text-center hover:border-black transition duration-300'
                >

                    <div className='flex justify-center mb-5'>

                        <div className='w-14 h-14 flex items-center justify-center bg-black text-white group-hover:bg-gray-800 transition duration-300'>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-7 h-7'
                            >
                                <path d='M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.35-1.66a11.82 11.82 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.42 4.42-9.84 9.85-9.84a9.79 9.79 0 0 1 6.96 2.89 9.79 9.79 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z' />
                            </svg>

                        </div>

                    </div>

                    <h3 className='text-lg font-medium'>
                        WhatsApp
                    </h3>

                    <p className='text-sm text-gray-500 mt-2'>
                        Chat directly with our sales team.
                    </p>

                    <p className='text-sm font-medium mt-4'>
                        +975 77441715
                    </p>

                    <span className='inline-block mt-5 text-sm border-b border-black'>
                        Chat with us →
                    </span>

                </a>


                {/* Facebook */}
                <a
                    href={facebookLink}
                    target='_blank'
                    rel='noreferrer'
                    className='group border border-gray-200 p-8 sm:p-10 text-center hover:border-black transition duration-300'
                >

                    <div className='flex justify-center mb-5'>

                        <div className='w-14 h-14 flex items-center justify-center bg-black text-white group-hover:bg-gray-800 transition duration-300'>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='w-7 h-7'
                            >
                                <path d='M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.92v-8.43H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.34l-.53 3.49h-2.81v8.43C19.61 23.07 24 18.09 24 12.07Z' />
                            </svg>

                        </div>

                    </div>

                    <h3 className='text-lg font-medium'>
                        Facebook
                    </h3>

                    <p className='text-sm text-gray-500 mt-2'>
                        Follow PD Furniture for updates and new arrivals.
                    </p>

                    <span className='inline-block mt-5 text-sm border-b border-black'>
                        Visit our page →
                    </span>

                </a>

            </div>


            {/* Bottom Message */}
            <div className='text-center mt-16 sm:mt-20'>

                <p className='text-xs tracking-[0.2em] text-gray-500'>
                    PD FURNITURE
                </p>

                <p className='text-sm text-gray-600 mt-3'>
                    Quality furniture. Better comfort. Made for living.
                </p>

            </div>

        </div>
    )
}

export default Contact