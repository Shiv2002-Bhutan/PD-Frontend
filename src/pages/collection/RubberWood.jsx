import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../../components/Title'
import CollectionProduct from '../../components/CollectionProducts'

const RubberWood = () => {

    const { products } = useContext(ShopContext)

    // Get Rubber Wood products from actual database/context data
    const rubberWoodProducts = products?.filter((product) => {

        const productText = `
            ${product.name || ''}
            ${product.category || ''}
            ${product.subCategory || ''}
            ${product.brand || ''}
            ${product.description || ''}
        `.toLowerCase()

        return (
            productText.includes('rubber wood') ||
            productText.includes('rubberwood')
        )

    })

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* Rubber Wood Introduction */}
            <div className='text-center py-8 sm:py-12'>

                <p className='text-xs tracking-[0.25em] text-gray-500 mb-3'>
                    PREMIUM PROCESSED WOOD
                </p>

                <div className='text-3xl sm:text-4xl md:text-5xl'>
                    <Title
                        text1={'RUBBER'}
                        text2={'WOOD'}
                    />
                </div>

                <p className='max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-600 leading-6'>
                    Premium-quality processed rubber wood, prepared for
                    furniture making and versatile woodworking applications.
                </p>

                {/* Quality Badge */}
                <div className='inline-flex items-center gap-2 mt-6 px-5 py-2 border border-gray-200 bg-gray-50'>

                    <span className='w-2 h-2 rounded-full bg-black'></span>

                    <span className='text-xs sm:text-sm font-medium tracking-wide'>
                        PROCESSED & READY FOR USE
                    </span>

                </div>

            </div>


            {/* Collection Introduction */}
            <div className='flex items-center gap-4 mb-6'>

                <div className='h-px bg-gray-200 flex-1'></div>

                <p className='text-sm sm:text-base font-medium tracking-wide text-gray-800'>
                    RUBBER WOOD COLLECTION
                </p>

                <div className='h-px bg-gray-200 flex-1'></div>

            </div>


            {/* Products */}
            {rubberWoodProducts?.length > 0 ? (

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>

                    {rubberWoodProducts.map((product, index) => (

                        <CollectionProduct
                            key={product._id || index}
                            product={product}
                        />

                    ))}

                </div>

            ) : (

                <div className='text-center py-20 text-gray-500'>
                    <p>No Rubber Wood products available.</p>
                </div>

            )}


            {/* Why Choose Our Rubber Wood */}
            <div className='mt-20 border-t border-gray-200 pt-12'>

                <div className='text-center mb-10'>

                    <p className='text-xs tracking-[0.2em] text-gray-500 mb-2'>
                        WHY RUBBER WOOD
                    </p>

                    <h2 className='text-2xl sm:text-3xl font-medium'>
                        Quality Wood for Quality Craftsmanship
                    </h2>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>

                    {/* Feature 1 */}
                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Processed & Ready
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            Professionally processed rubber wood prepared
                            for furniture manufacturing and woodworking.
                        </p>

                    </div>


                    {/* Feature 2 */}
                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Consistent Quality
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            Carefully selected and processed wood with
                            consistent quality for a range of applications.
                        </p>

                    </div>


                    {/* Feature 3 */}
                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Versatile Applications
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            Suitable for furniture, cabinetry, panels and
                            other quality woodworking projects.
                        </p>

                    </div>

                </div>

            </div>


            {/* Product Information */}
            <div className='mt-16 bg-gray-50 px-6 py-10 sm:py-12'>

                <div className='max-w-3xl mx-auto text-center'>

                    <p className='text-xs tracking-[0.2em] text-gray-500 mb-3'>
                        PREMIUM RUBBER WOOD
                    </p>

                    <h2 className='text-2xl sm:text-3xl font-medium'>
                        Built for Furniture & Woodworking
                    </h2>

                    <p className='mt-4 text-sm text-gray-600 leading-6'>
                        Our processed rubber wood is suitable for furniture
                        manufacturers, carpenters, woodworkers and other
                        applications where quality processed wood is required.
                    </p>

                </div>

            </div>


            {/* Enquiry CTA */}
            <div className='mt-8 bg-black text-white px-6 py-10 sm:py-12 text-center'>

                <p className='text-xs tracking-[0.2em] text-gray-400 mb-3'>
                    RUBBER WOOD
                </p>

                <h2 className='text-2xl sm:text-3xl font-medium'>
                    Looking for Premium Rubber Wood?
                </h2>

                <p className='max-w-xl mx-auto mt-3 text-sm text-gray-400'>
                    Contact our sales team for product specifications,
                    pricing and availability.
                </p>

                <a
                    href='https://wa.me/97517111333'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center justify-center mt-6 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition duration-300'
                >
                    Enquire on WhatsApp
                </a>

            </div>

        </div>
    )
}

export default RubberWood