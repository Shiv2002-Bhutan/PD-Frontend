
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import NewHome from './pages/NewHome'
import Collection from './pages/Collection'
import Contact from './pages/Contact'

import KingKoil from './pages/collection/KingKoil'
import Furniture from './pages/collection/Furniture'
import RubberWood from './pages/collection/RubberWood'
import Clothing from './pages/collection/Clothing'
import Mattresses from './pages/collection/Mattresses'
import ProductDetail from './pages/ProductDetail'

const App = () => {

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

            {/* Notifications */}
            <ToastContainer />

            {/* Navigation */}
            <Navbar />

            {/* Pages */}
            <Routes>

                {/* Main Pages */}
                <Route
                    path='/'
                    element={<NewHome />}
                />

                <Route
                    path='/collections'
                    element={<Collection />}
                />

                <Route
                    path='/contact'
                    element={<Contact />}
                />


                {/* Collection Pages */}
                <Route
                    path='/collection/king-koil'
                    element={<KingKoil />}
                />

                <Route
                    path='/collection/furniture'
                    element={<Furniture />}
                />

                <Route
                    path='/collection/rubber-wood'
                    element={<RubberWood />}
                />

                <Route
                    path='/collection/clothing'
                    element={<Clothing />}
                />

                <Route
                    path='/collection/mattresses'
                    element={<Mattresses />}
                />


                {/* Product Detail */}
                <Route
                    path='/product/:id'
                    element={<ProductDetail />}
                />


                {/* Fallback */}
                <Route
                    path='*'
                    element={<NewHome />}
                />

            </Routes>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default App
