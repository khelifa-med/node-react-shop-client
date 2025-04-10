import React from 'react'
import { Link } from 'react-router-dom';

import CartOffset from '../4_ShopPage/CartOffSet';
import WishlistOffSet from '../4_ShopPage/WishlistOffSet';

export default function Navebar() {
    const navbarLinks = [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Shop',
            href: '/shop',
        },
        {
            text: 'About Us',
            href: '/about',
        },
        {
            text: 'Contact',
            href: '/contact',
        }
    ];
    return (
        <div className='w-full flex  justify-center py-4 items-center'>

            <div className="w-10/12 flex justify-center py-4 items-center">
                <div className="flex-1">
                    <h1 className='logo font-bold text-2xl'>Furniture</h1>


                </div>
                <div className="flex-1 flex justify-center items-center">
                    <ul className='flex justify-center items-center'>
                        {
                            navbarLinks.map((link, index) => {
                                return <li key={index}>
                                    <Link to={link.href} className='mx-4 text-lg text-gray-500 hover:text-gray-800 '>{link.text}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="flex-1 text-xl gap-2 flex justify-end items-center">
                    <WishlistOffSet />
                    <CartOffset/>

                </div>
            </div>

        </div>
    )
}
