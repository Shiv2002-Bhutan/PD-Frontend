import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../../components/Title'
import CollectionProducts from '../../components/CollectionProducts'

const Clothing = () => {

    const { products } = useContext(ShopContext)

    const clothingProducts = products?.filter((product) => {

        const productText = `
            ${product.name || ''}
            ${product.category || ''}
            ${product.subCategory || ''}
            ${product.brand || ''}
        `.toLowerCase()

        return (
            productText.includes('clothing') ||
            productText.includes('bedsheet') ||
            productText.includes('bed sheet') ||
            productText.includes('blanket') ||
            productText.includes('duvet') ||
            productText.includes('pillow') ||
            productText.includes('towel') ||
            productText.includes('textile')
        )

    })

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* Page Heading */}
            <div className='text-center py-8'>

                <div className='text-2xl sm:text-3xl'>
                    <Title
                        text1={'HOME'}
                        text2={'TEXTILES'}
                    />
                </div>

                <p className='max-w-2xl mx-auto mt-3 text-xs sm:text-sm text-gray-600'>
                    Discover comfortable and stylish home essentials,
                    including bed sheets, blankets, duvets, pillow covers
                    and more.
                </p>

            </div>

            {/* Products */}
            {clothingProducts?.length > 0 ? (

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>

                    {clothingProducts.map((product, index) => (

                        <CollectionProduct
                            key={product._id || index}
                            product={product}
                        />

                    ))}

                </div>

            ) : (

                <div className='text-center py-20 text-gray-500'>
                    <p>No home textile products available.</p>
                </div>

            )}

        </div>
    )
}

export default Clothing