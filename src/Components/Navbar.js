import React from 'react'

function Navbar() {
    return (
        // <h1>This is Navbar...</h1>
        // < !--TW Elements is free under AGPL, with commercial license required for specific uses.See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
        // < !--Main navigation container-- >
        <>
            <div className='sticky top-0 bg-orange-300 flex py-10'>
                <div className='w-5/6 bg-amber-200 font-sans text-6xl font-bold py-4'>PadhaiPlanet</div>
                <div className='text-right flex'>
                    <button className='float-left bg-lime-400 w-40 text-xl hover:bg-green-500'> About Us</button>
                    <button className='float-left bg-lime-400 w-40 text-xl hover:bg-green-500'> Blogs</button>
                    <button className='float-right w-40 text-xl hover:bg-green-500'> Contact Us</button>
                    <button className='float-right w-40 mr-0 text-xl hover:bg-green-500'>Profile</button>
                </div>
            </div>
            <div>
                <nav aria-label="breadcrumb" className="w-max">
                    <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                        <li
                            className="flex items-center font-sans text-xl antialiased font-bold leading-normal transition-colors duration-300 cursor-pointer text-sky-600 hover:text-sky-300">
                            <a href="#" className="opacity-60">Home</a>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default Navbar
