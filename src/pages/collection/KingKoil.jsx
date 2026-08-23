import React from 'react'
import Title from '../../components/Title'
import CollectionProduct from '../../components/CollectionProducts'

const KingKoil = () => {

    const kingKoilProducts = [
        {
            _id: 'kk001',
            name: 'King Koil SmartLife',
            image: [
                'https://www.goodbed.com/media/_cache/thumbs/800x800/king-koil-smartlife-picture-6.jpg'
            ]
        },
        {
            _id: 'kk002',
            name: 'King Koil Natural',
            image: [
                'https://mattressworldnorthwest.com/cdn/shop/files/King_Koil_Natural.jpg'
            ]
        },
        {
            _id: 'kk003',
            name: 'King Koil Modern Luxury',
            image: [
                'https://jewelcitymattress.com/cdn/shop/files/Modern_Luxury.jpg'
            ]
        },
        {
            _id: 'kk004',
            name: 'King Koil Luxury',
            image: [
                'https://sertamattress.lt/upload/iblock/b76/b7653c73e7269ba4250d9e52c8f79eef.jpg'
            ]
        },
        {
            _id: 'kk005',
            name: 'King Koil Lexington',
            image: [
                'https://aremsaprod.vtexassets.com/arquivos/ids/901561-800-auto?aspect=true&height=auto&v=638871702558170000&width=800'
            ]
        },
        {
            _id: 'kk006',
            name: 'King Koil Pure Home',
            image: [
                'https://lacolchoneria.com.gt/cdn/shop/files/col_king-koil_pure_home_firm.png?v=1741445676&width=1200'
            ]
        }
    ]

    return (
        <div className='my-10 px-4 sm:px-6 lg:px-0'>

            {/* King Koil Introduction */}
            <div className='text-center py-8 sm:py-12'>

                <p className='text-xs tracking-[0.25em] text-gray-500 mb-3'>
                    OFFICIAL KING KOIL DISTRIBUTOR
                </p>

                <div className='text-3xl sm:text-4xl md:text-5xl'>
                    <Title
                        text1={'KING'}
                        text2={'KOIL'}
                    />
                </div>

                <p className='max-w-2xl mx-auto mt-4 text-sm sm:text-base text-gray-600 leading-6'>
                    Experience premium King Koil mattresses, available in
                    Bhutan exclusively through PD Furniture.
                </p>

                {/* Distributor Badge */}
                <div className='inline-flex items-center gap-2 mt-6 px-5 py-2 border border-gray-200 bg-gray-50'>

                    <span className='w-2 h-2 rounded-full bg-black'></span>

                    <span className='text-xs sm:text-sm font-medium tracking-wide'>
                        SOLE DISTRIBUTOR IN BHUTAN
                    </span>

                </div>

            </div>


            {/* Collection Introduction */}
            <div className='flex items-center gap-4 mb-6'>

                <div className='h-px bg-gray-200 flex-1'></div>

                <p className='text-sm sm:text-base font-medium tracking-wide text-gray-800'>
                    KING KOIL COLLECTION
                </p>

                <div className='h-px bg-gray-200 flex-1'></div>

            </div>


            {/* Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5'>

                {kingKoilProducts.map((product) => (

                    <CollectionProduct
                        key={product._id}
                        product={product}
                    />

                ))}

            </div>


            {/* Why Buy From PD Furniture */}
            <div className='mt-20 border-t border-gray-200 pt-12'>

                <div className='text-center mb-10'>

                    <p className='text-xs tracking-[0.2em] text-gray-500 mb-2'>
                        WHY PD FURNITURE
                    </p>

                    <h2 className='text-2xl sm:text-3xl font-medium'>
                        Your King Koil Partner in Bhutan
                    </h2>

                </div>


                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>

                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Official Distribution
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            King Koil products officially available through
                            PD Furniture in Bhutan.
                        </p>

                    </div>


                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Genuine Products
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            Access authentic King Koil mattresses through
                            our official distribution channel.
                        </p>

                    </div>


                    <div>

                        <div className='text-2xl mb-3'>
                            ✓
                        </div>

                        <h3 className='text-sm font-medium'>
                            Local Assistance
                        </h3>

                        <p className='text-xs text-gray-500 mt-2 leading-5'>
                            Contact our sales team in Bhutan for product
                            information, pricing and availability.
                        </p>

                    </div>

                </div>

            </div>


            {/* Enquiry CTA */}
            <div className='mt-16 bg-black text-white px-6 py-10 sm:py-12 text-center'>

                <p className='text-xs tracking-[0.2em] text-gray-400 mb-3'>
                    KING KOIL BHUTAN
                </p>

                <h2 className='text-2xl sm:text-3xl font-medium'>
                    Find Your Perfect Comfort
                </h2>

                <p className='max-w-xl mx-auto mt-3 text-sm text-gray-400'>
                    Speak with our sales representative for product details,
                    pricing and availability.
                </p>

                <a
                    href='https://wa.me/97577441715'
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

export default KingKoil