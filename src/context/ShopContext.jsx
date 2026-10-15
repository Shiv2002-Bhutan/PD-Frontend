import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = ({ children }) => {
    const backendUrl = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '')

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                `${backendUrl}/api/product/list`
            )

            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(
                    response.data.message || 'Unable to load products'
                )
            }
        } catch (error) {
            console.error('Error fetching products:', error)
            toast.error('Unable to connect to the server')
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const contextValue = {
        products,
        setProducts,
        search,
        setSearch,
        backendUrl,
        fetchProducts
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
