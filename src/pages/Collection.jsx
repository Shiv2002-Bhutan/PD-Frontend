
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
            name: 'Premium Rubber Wood',
            value: 'rubber-wood'
        },
        {
            name: 'Clothing',
            value: 'clothing'
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


        // =========================
        // KING KOIL
        // =========================
        if (
            productText.includes('king koil') ||
            productText.includes('kingkoil')
        ) {
            return 'king-koil'
        }


        // =========================
        // RUBBER WOOD
        // IMPORTANT:
        // Check this BEFORE furniture.
        // =========================
        if (
            productText.includes('rubber wood') ||
            productText.includes('rubberwood')
        ) {
            return 'rubber-wood'
        }


        // =========================
        // FURNITURE
        // =========================
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


        // =========================
        // CLOTHING
        // =========================
        if (
            productText.includes('clothing') ||
            productText.includes('bedsheet') ||
            productText.includes('bed sheet') ||
            productText.includes('blanket') ||
            productText.includes('duvet') ||
            productText.includes('pillow') ||
            productText.includes('towel') ||
            productText.includes('textile')
        ) {
            return 'clothing'
        }


        // =========================
        // MATTRESSES
        // =========================
        if (productText.includes('mattress')) {
            return 'mattresses'
        }


        return 'other'
    }


    // =========================
    // FILTER + SEARCH + SORT
    // =========================
    useEffect(() => {

        // Use ONLY products from backend / ShopContext
        let productsCopy = [...(products || [])]


        // =========================
        // SEARCH
        // =========================
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


        // =========================
        // CATEGORY
        // =========================
        if (activeCategory !== 'all') {

            productsCopy = productsCopy.filter(
                (product) =>
                    getProductCategory(product) === activeCategory
            )

        }


        // =========================
        // SORTING
        // =========================
        if (sortType === 'name-az') {

            productsCopy.sort((a, b) =>
                (a.name || '').localeCompare(b.name || '')
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
                        text1='OUR'
                        text2='COLLECTIONS'
                    />

                </div>

                <p className='max-w-2xl mx-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore quality furniture, premium mattresses, King Koil
                    products, processed rubber wood and home essentials from
                    PD Furniture.
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
                        className='
                            w-full
                            border
                            border-gray-300
                            px-5
                            py-3
                            pr-12
                            text-sm
                            outline-none
                            focus:border-black
                            transition
                            duration-300
                        '
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
                                transition
                                duration-300
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
                    className='
                        border
                        border-gray-300
                        px-3
                        py-2
                        text-xs
                        sm:text-sm
                        bg-white
                        outline-none
                    '
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
                        className='
                            mt-4
                            bg-black
                            text-white
                            px-5
                            py-2.5
                            text-sm
                            hover:bg-gray-800
                            transition
                            duration-300
                        '
                    >
                        View All Products
                    </button>

                </div>

            )}

        </div>
    )
}

export default Collection