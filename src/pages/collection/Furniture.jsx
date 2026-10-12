import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../../components/Title'
import CollectionProducts from '../../components/CollectionProducts'

const Furniture = () => {

    const { products } = useContext(ShopContext)

    const furnitureProducts = products?.filter((product) => {

        const productText = `
            ${product.name || ''}
            ${product.category || ''}
            ${product.subCategory || ''}
            ${product.brand || ''}
        `.toLowerCase()

        return (
            productText.includes('furniture') ||
            productText.includes('sofa')
        )

    })

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* Page Heading */}
            <div className='text-center py-8'>

                <div className='text-2xl sm:text-3xl'>
                    <Title
                        text1={'FURNITURE'}
                        text2={'& SOFAS'}
                    />
                </div>

                <p className='max-w-2xl mx-auto mt-3 text-xs sm:text-sm text-gray-600'>
                    Explore our collection of quality furniture and sofas
                    designed for comfort, style and everyday living.
                </p>

            </div>

            {/* Products */}
            {furnitureProducts?.length > 0 ? (

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>

                    {furnitureProducts.map((product, index) => (

                        <CollectionProducts
                            key={product._id || index}
                            product={product}
                        />

                    ))}

                </div>

            ) : (

                <div className='text-center py-20 text-gray-500'>
                    <p>No furniture products available.</p>
                </div>

            )}

        </div>
    )
}

export default Furniture