import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CollectionProduct from '../components/CollectionProducts'

const Collection = () => {

    const {
        products,
        search,
        setSearch
    } = useContext(ShopContext)

    const [filterProducts, setFilterProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState('all')
    const [sortType, setSortType] = useState('featured')


    // Temporary dummy products
    // These can be removed once products are available from backend.
    const dummyProducts = [

        // =========================
        // KING KOIL
        // =========================
        {
            _id: 'demo-kk-001',
            name: 'King Koil SmartLife',
            category: 'king-koil',
            subCategory: 'mattress',
            brand: 'King Koil',
            image: [
                'https://www.goodbed.com/media/_cache/thumbs/800x800/king-koil-smartlife-picture-6.jpg'
            ]
        },

        {
            _id: 'demo-kk-002',
            name: 'King Koil Natural',
            category: 'king-koil',
            subCategory: 'mattress',
            brand: 'King Koil',
            image: [
                'https://mattressworldnorthwest.com/cdn/shop/files/King_Koil_Natural.jpg'
            ]
        },

        {
            _id: 'demo-kk-003',
            name: 'King Koil Modern Luxury',
            category: 'king-koil',
            subCategory: 'mattress',
            brand: 'King Koil',
            image: [
                'https://jewelcitymattress.com/cdn/shop/files/Modern_Luxury.jpg'
            ]
        },


        // =========================
        // FURNITURE
        // =========================
        {
            _id: 'demo-f-001',
            name: 'Modern 3 Seater Sofa',
            category: 'furniture',
            subCategory: 'sofa',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-f-002',
            name: 'Classic Lounge Chair',
            category: 'furniture',
            subCategory: 'chair',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-f-003',
            name: 'Modern Wooden Coffee Table',
            category: 'furniture',
            subCategory: 'table',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1000&q=80'
            ]
        },


        // =========================
        // HOME TEXTILES
        // =========================
        {
            _id: 'demo-t-001',
            name: 'Premium Cotton Bedsheet',
            category: 'home-textiles',
            subCategory: 'bedsheet',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-t-002',
            name: 'Luxury Soft Blanket',
            category: 'home-textiles',
            subCategory: 'blanket',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-t-003',
            name: 'Premium Duvet Set',
            category: 'home-textiles',
            subCategory: 'duvet',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1000&q=80'
            ]
        },


        // =========================
        // MATTRESSES
        // =========================
        {
            _id: 'demo-m-001',
            name: 'Premium Comfort Mattress',
            category: 'mattresses',
            subCategory: 'mattress',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-m-002',
            name: 'Orthopedic Support Mattress',
            category: 'mattresses',
            subCategory: 'mattress',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
            ]
        },

        {
            _id: 'demo-m-003',
            name: 'Luxury Memory Foam Mattress',
            category: 'mattresses',
            subCategory: 'mattress',
            brand: 'PD Furniture',
            image: [
                'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
            ]
        }

    ]


    // Combine dummy products with backend products
    const allProducts = [
        ...dummyProducts,
        ...(products || [])
    ]


    // =========================
    // CATEGORIES
    // =========================
    const categories = [
        {
            name: 'All Products',
            value: 'all'
        },
        {
            name: 'King Koil',
            value: 'king-koil'
        },
        {
            name: 'Furniture & Sofas',
            value: 'furniture'
        },
        {
            name: 'Home Textiles',
            value: 'textiles'
        },
        {
            name: 'Mattresses',
            value: 'mattresses'
        }
    ]


    // =========================
    // DETERMINE PRODUCT CATEGORY
    // =========================
    const getProductCategory = (product) => {

        const productText = `
            ${product.name || ''}
            ${product.category || ''}
            ${product.subCategory || ''}
            ${product.brand || ''}
        `.toLowerCase()


        // King Koil
        if (productText.includes('king koil')) {
            return 'king-koil'
        }


        // Furniture
        if (
            productText.includes('furniture') ||
            productText.includes('sofa') ||
            productText.includes('chair') ||
            productText.includes('table') ||
            productText.includes('bed') ||
            productText.includes('wardrobe') ||
            productText.includes('cabinet')
        ) {
            return 'furniture'
        }


        // Home textiles
        if (
            productText.includes('bedsheet') ||
            productText.includes('bed sheet') ||
            productText.includes('blanket') ||
            productText.includes('duvet') ||
            productText.includes('pillow') ||
            productText.includes('towel') ||
            productText.includes('textile')
        ) {
            return 'textiles'
        }


        // Mattresses
        if (productText.includes('mattress')) {
            return 'mattresses'
        }


        return 'other'
    }


    // =========================
    // FILTER + SEARCH + SORT
    // =========================
    useEffect(() => {

        let productsCopy = [...allProducts]


        // Search
        if (search?.trim()) {

            const searchValue = search.toLowerCase().trim()

            productsCopy = productsCopy.filter((product) => {

                const productText = `
                    ${product.name || ''}
                    ${product.category || ''}
                    ${product.subCategory || ''}
                    ${product.brand || ''}
                `.toLowerCase()

                return productText.includes(searchValue)

            })

        }


        // Category
        if (activeCategory !== 'all') {

            productsCopy = productsCopy.filter(
                (product) =>
                    getProductCategory(product) === activeCategory
            )

        }


        // Sorting
        if (sortType === 'name-az') {

            productsCopy.sort((a, b) =>
                (a.name || '').localeCompare(a.name || '')
            )

        } else if (sortType === 'name-za') {

            productsCopy.sort((a, b) =>
                (b.name || '').localeCompare(a.name || '')
            )

        }


        setFilterProducts(productsCopy)

    }, [
        products,
        search,
        activeCategory,
        sortType
    ])


    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* =========================
                PAGE HEADING
            ========================= */}
            <div className='text-center py-8 sm:py-10'>

                <div className='text-2xl sm:text-3xl md:text-4xl'>

                    <Title
                        text1={'OUR'}
                        text2={'COLLECTIONS'}
                    />

                </div>

                <p className='max-w-2xl mx-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore quality furniture, premium mattresses, King Koil
                    products and home essentials from PD Furniture.
                </p>

            </div>


            {/* =========================
                SEARCH
            ========================= */}
            <div className='max-w-2xl mx-auto mb-8'>

                <div className='relative'>

                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search products...'
                        className='w-full border border-gray-300 px-5 py-3 pr-12 text-sm outline-none focus:border-black transition duration-300'
                    />

                    <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 text-gray-500'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z'
                            />
                        </svg>

                    </div>

                </div>

            </div>


            {/* =========================
                CATEGORY FILTER
            ========================= */}
            <div className='mb-8'>

                <div className='flex gap-2 sm:gap-3 overflow-x-auto pb-2'>

                    {categories.map((category) => (

                        <button
                            key={category.value}
                            onClick={() =>
                                setActiveCategory(category.value)
                            }
                            className={`
                                flex-shrink-0
                                px-4 sm:px-5
                                py-2.5
                                text-xs sm:text-sm
                                border
                                transition duration-300
                                ${
                                    activeCategory === category.value
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                                }
                            `}
                        >
                            {category.name}
                        </button>

                    ))}

                </div>

            </div>


            {/* =========================
                PRODUCTS HEADER
            ========================= */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>

                <p className='text-sm text-gray-500'>
                    {filterProducts.length}{' '}
                    {filterProducts.length === 1
                        ? 'Product'
                        : 'Products'}
                </p>


                <select
                    value={sortType}
                    onChange={(e) =>
                        setSortType(e.target.value)
                    }
                    className='border border-gray-300 px-3 py-2 text-xs sm:text-sm bg-white outline-none'
                >

                    <option value='featured'>
                        Featured
                    </option>

                    <option value='name-az'>
                        Name: A - Z
                    </option>

                    <option value='name-za'>
                        Name: Z - A
                    </option>

                </select>

            </div>


            {/* =========================
                PRODUCTS
            ========================= */}
            {filterProducts.length > 0 ? (

                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>

                    {filterProducts.map((product, index) => (

                        <CollectionProduct
                            key={product._id || index}
                            product={product}
                        />

                    ))}

                </div>

            ) : (

                <div className='py-20 text-center'>

                    <p className='text-gray-500 text-sm'>
                        No products found.
                    </p>

                    <button
                        onClick={() => {
                            setSearch('')
                            setActiveCategory('all')
                            setSortType('featured')
                        }}
                        className='mt-4 bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-800 transition duration-300'
                    >
                        View All Products
                    </button>

                </div>

            )}

        </div>
    )
}

export default Collection