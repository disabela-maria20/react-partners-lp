import React from 'react'
import Footer from '../../molecules/Footer/Footer'
import Logo from '../../atom/Logo/Logo'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import HomeThanks from '../../molecules/HomeThanks/HomeThanks'

const Thanks = () => {
    return (
        <>
            <div className='absolute md:relative top-0 left-0 w-full z-50 bg-Blue-900 md:border-b-2 md:border-solid md:border-Black-900'>
                <div className="md:container m-auto px-15">
                    <div className="flex justify-between items-center area-menu-mobile">
                        <Link href="/">
                            <i className="text-white text-31">
                                <FaArrowLeft />
                            </i>
                        </Link>
                        <div className="logo">
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>
            <HomeThanks/>
            <Footer />
        </>
    )
}

export default Thanks
