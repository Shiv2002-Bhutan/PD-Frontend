import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

import kingKoil from './collectionImages/kingKoil.png'
import furniture from './collectionImages/furniture.png'
import clothing from './collectionImages/clothing.png'
import mattress from './collectionImages/mattress.png'

const LatestCollections = () => {

    const categories = [
        {
            name: 'King Koil',
            image: kingKoil,
            description: 'Premium mattresses for better sleep.',
            link: '/collection/king-koil'
        },
        {
            name: 'Furniture & Sofas',
            image: furniture,
            description: 'Quality furniture crafted for modern living.',
            link: '/collection/furniture'
        },
        {
            name: 'Clothing',
            image: clothing,
            description: 'Comfortable and stylish clothing for every occasion.',
            link: '/collection/clothing'
        },
        {
            name: 'Mattresses',
            image: mattress,
            description: 'Comfort and support for a restful night.',
            link: '/collection/mattresses'
        }
    ]

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* Heading */}
            <div className='text-center py-8 text-3xl'>

                <Title
                    text1={'EXPLORE'}
                    text2={'COLLECTIONS'}
                />

                <p className='w-full sm:w-3/4 lg:w-2/3 m-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600'>
                    Discover our collection of quality furniture, premium
                    mattresses, clothing and more.
                </p>

            </div>

            {/* Collection Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch'>

                {categories.map((category, index) => (

                    <div
                        key={index}
                        className='group flex flex-col h-full bg-white border border-gray-100 overflow-hidden'
                    >

                        {/* Responsive Image */}
                        <div className='w-full aspect-[3/2] overflow-hidden flex-shrink-0'>
                            <img
                                src={category.image}
                                alt={category.name}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                        </div>

                        {/* Card Content */}
                        <div className='flex flex-col flex-1 p-4 sm:p-5'>

                            {/* Title */}
                            <h3 className='text-lg sm:text-xl font-medium text-gray-900'>
                                {category.name}
                            </h3>

                            {/* Description */}
                            <p className='text-xs sm:text-sm text-gray-500 mt-2 min-h-[40px]'>
                                {category.description}
                            </p>

                            {/* Explore Button */}
                            <div className='mt-auto pt-4'>

                                <Link
                                    to={category.link}
                                    className='inline-block bg-black text-white px-5 py-2.5 text-xs sm:text-sm hover:bg-gray-800 transition duration-300'
                                >
                                    Explore Now
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default LatestCollections