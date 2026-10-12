import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const ProductDetail = () => {
    const { id } = useParams()
    const { products } = useContext(ShopContext)

    const product = products?.find((p) => p._id === id)

    const whatsappNumber =
        import.meta.env.VITE_WHATSAPP_NUMBER || '97577441715'

    // Product not found / still loading
    if (!product) {
        return (
            <div className="my-20 text-center">
                <p className="text-gray-500 text-sm">
                    Product not found, or still loading.
                </p>

                <Link
                    to="/collections"
                    className="inline-block mt-4 bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-800 transition duration-300"
                >
                    Browse All Products
                </Link>
            </div>
        )
    }

    // WhatsApp message
    const messageLines = [
        `Hello, I am interested in *${product.name}*.`,
        product.category ? `Category: ${product.category}` : null,
        product.subCategory ? `Type: ${product.subCategory}` : null,
        product.brand ? `Brand: ${product.brand}` : null,
        '',
        'Please provide me with more details and price.'
    ].filter(Boolean)

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        messageLines.join('\n')
    )}`

    // Support both image array and single image
    const imageUrl = Array.isArray(product.image)
        ? product.image[0]
        : product.image

    return (
        <div className="my-10 px-4 sm:px-6 lg:px-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">

                {/* ================= IMAGE ================= */}
                <div className="w-full aspect-square bg-gray-50 border border-gray-100 overflow-hidden">

                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none'
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            No image available
                        </div>
                    )}

                </div>

                {/* ================= DETAILS ================= */}
                <div>

                    {/* Product Title */}
                    <div className="mb-6">
                        <Title
                            text1={product.name?.split(' ')[0] || ''}
                            text2={
                                product.name
                                    ?.split(' ')
                                    .slice(1)
                                    .join(' ') || ''
                            }
                        />
                    </div>

                    {/* Product Information */}
                    <div className="space-y-2 mb-8">

                        {product.category && (
                            <p className="text-sm text-gray-600">
                                <span className="text-gray-400">
                                    Category:
                                </span>{' '}
                                {product.category}
                            </p>
                        )}

                        {product.subCategory && (
                            <p className="text-sm text-gray-600">
                                <span className="text-gray-400">
                                    Type:
                                </span>{' '}
                                {product.subCategory}
                            </p>
                        )}

                        {product.brand && (
                            <p className="text-sm text-gray-600">
                                <span className="text-gray-400">
                                    Brand:
                                </span>{' '}
                                {product.brand}
                            </p>
                        )}

                    </div>

                    {/* ================= WHATSAPP ================= */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition duration-300"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .18 5.32 .18 11.86c0 2.09 .55 4.13 1.6 5.93L.1 24l6.35-1.66a11.82 11.82 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.42ZM12.05 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.82 9.82 0 0 1-1.51-5.2c0-5.42 4.42-9.84 9.85-9.84a9.79 9.79 0 0 1 6.96 2.89 9.79 9.79 0 0 1 2.88 6.97c0 5.42-4.41 9.84-9.83 9.84Zm5.4-7.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                        </svg>

                        Enquire Now

                    </a>

                </div>

            </div>

        </div>
    )
}

export default ProductDetail