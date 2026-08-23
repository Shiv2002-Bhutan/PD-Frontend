import React from 'react'

const CollectionProducts = ({ product }) => {

    const whatsappNumber = '975441715'

    const message = `Hello, I am interested in ${product.name}. Please provide me with more details and price.`

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <div className='group border border-gray-100 bg-white overflow-hidden'>

            {/* Product Image */}
            <div className='w-full aspect-square overflow-hidden bg-gray-50'>
                <img
                    src={product.image?.[0] || product.image}
                    alt={product.name}
                    className='w-full h-full object-cover transition duration-500 group-hover:scale-105'
                />
            </div>

            {/* Product Information */}
            <div className='p-4'>

                <h3 className='text-sm sm:text-base font-medium text-gray-900'>
                    {product.name}
                </h3>

                {/* Enquire */}
                <a
                    href={whatsappLink}
                    target='_blank'
                    rel='noreferrer'
                    className='mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2.5 text-xs sm:text-sm hover:bg-gray-800 transition duration-300'
                >

                    {/* WhatsApp Icon */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4'
                    >
                        <path d='M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.6 5.93L.1 24l6.35-1.66a11.82 11.82 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.42 4.42-9.84 9.85-9.84a9.79 9.79 0 0 1 6.96 2.89 9.79 9.79 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z' />
                    </svg>

                    Enquire Now

                </a>

            </div>

        </div>
    )
}

export default CollectionProducts